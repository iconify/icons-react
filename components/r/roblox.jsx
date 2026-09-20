import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb1eob28e.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hb1eob28e"/>`,
		"fallback": "material-icon-theme:roblox",
	});
}

export default Component;
