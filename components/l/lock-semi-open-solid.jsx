import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yddhjf-9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yddhjf-9l"/>`,
		"fallback": "sidekickicons:lock-semi-open-solid",
	});
}

export default Component;
