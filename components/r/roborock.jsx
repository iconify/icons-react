import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxr5szb8b.css';

const viewBox = {"width":1136.55,"height":1136.55};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxr5szb8b"/>`,
		"fallback": "thesvg:roborock",
	});
}

export default Component;
