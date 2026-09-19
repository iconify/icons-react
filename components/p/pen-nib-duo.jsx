import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgm9wdbgk.css';
import '../../css/z/zne832bro.css';
import '../../css/a/argowfbtr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qgm9wdbgk"/><path class="zne832bro"/><path class="argowfbtr"/></g>`,
		"fallback": "glyphs:pen-nib-duo",
	});
}

export default Component;
