import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-_1zwz7k.css';
import '../../css/h/hi71yj59m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-_1zwz7k"/><path class="hi71yj59m"/></g>`,
		"fallback": "glyphs:tree-2-duo",
	});
}

export default Component;
