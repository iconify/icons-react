import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmd4-hb4s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmd4-hb4s"/>`,
		"fallback": "uiw:time-o",
	});
}

export default Component;
