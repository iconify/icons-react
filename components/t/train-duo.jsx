import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vou3r2ifc.css';
import '../../css/t/t17ta3bli.css';
import '../../css/n/nxbj7m54b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vou3r2ifc"/><path class="t17ta3bli"/><path class="nxbj7m54b"/></g>`,
		"fallback": "glyphs:train-duo",
	});
}

export default Component;
