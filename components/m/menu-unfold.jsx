import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh1hauwkd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh1hauwkd"/>`,
		"fallback": "uiw:menu-unfold",
	});
}

export default Component;
