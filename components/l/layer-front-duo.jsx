import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttg49pgqf.css';
import '../../css/m/mynzkfb2a.css';
import '../../css/p/p4c177ohf.css';
import '../../css/q/qchq462ch.css';
import '../../css/a/a6_rmbcth.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttg49pgqf"/><path class="mynzkfb2a"/><path class="p4c177ohf"/><path class="qchq462ch"/><path class="a6_rmbcth"/></g>`,
		"fallback": "glyphs:layer-front-duo",
	});
}

export default Component;
