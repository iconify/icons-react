import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpu-hnz2y.css';
import '../../css/q/qdsvvsbmf.css';
import '../../css/t/txojlohjj.css';
import '../../css/s/snfdzfbzp.css';
import '../../css/h/hokg7wb8o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gpu-hnz2y"/><path class="qdsvvsbmf"/><path class="txojlohjj"/><path class="snfdzfbzp"/><path class="hokg7wb8o"/></g>`,
		"fallback": "glyphs:queen-bold",
	});
}

export default Component;
