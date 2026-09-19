import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd86bkbuk.css';
import '../../css/c/c9wubuuva.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yd86bkbuk"/><path class="c9wubuuva"/></g>`,
		"fallback": "glyphs:trash-duo",
	});
}

export default Component;
