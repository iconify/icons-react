import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvu0zdbdh.css';
import '../../css/d/dwetsgblj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvu0zdbdh"/><path class="dwetsgblj"/></g>`,
		"fallback": "glyphs:path-1-duo",
	});
}

export default Component;
