import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/ru3n1acww.css';
import '../../css/l/lgzmhqtyx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="ru3n1acww"/><path class="lgzmhqtyx"/></g>`,
		"fallback": "glyphs-poly:note",
	});
}

export default Component;
