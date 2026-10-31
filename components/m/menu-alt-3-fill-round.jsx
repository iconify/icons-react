import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahowc3_6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahowc3_6y"/>`,
		"fallback": "coolicons:menu-alt-3-fill-round",
	});
}

export default Component;
