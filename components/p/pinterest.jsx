import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb1ka5nvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb1ka5nvk"/>`,
		"fallback": "thesvg:pinterest",
	});
}

export default Component;
