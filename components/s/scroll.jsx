import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfamqvjas.css';
import '../../css/h/hjrj_fbxo.css';
import '../../css/l/luctw4btv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jfamqvjas"/><path class="hjrj_fbxo"/><path clip-rule="evenodd" class="luctw4btv"/></g>`,
		"fallback": "glyphs-poly:scroll",
	});
}

export default Component;
