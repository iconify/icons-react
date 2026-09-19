import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppkg4tldt.css';
import '../../css/s/s_-_f_bdq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ppkg4tldt"/><path class="s_-_f_bdq"/></g>`,
		"fallback": "glyphs:plug-duo",
	});
}

export default Component;
