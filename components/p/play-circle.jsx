import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2n-ljuwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2n-ljuwy"/>`,
		"fallback": "uiw:play-circle",
	});
}

export default Component;
