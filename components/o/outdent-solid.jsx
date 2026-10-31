import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbu6hwbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbu6hwbay"/>`,
		"fallback": "sidekickicons:outdent-solid",
	});
}

export default Component;
