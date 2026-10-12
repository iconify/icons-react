import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs7tw9bod.css';
import '../../css/y/yqfo4kn1i.css';
import '../../css/a/abdk55fmk.css';
import '../../css/n/nke2fdcqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hs7tw9bod"/><path class="yqfo4kn1i"/><path class="abdk55fmk"/><path class="nke2fdcqb"/></g>`,
		"fallback": "andrsrxn:sofa",
	});
}

export default Component;
