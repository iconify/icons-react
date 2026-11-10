import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma8js3b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ma8js3b4t"/>`,
		"fallback": "sidekickicons:shield-plus-solid",
	});
}

export default Component;
