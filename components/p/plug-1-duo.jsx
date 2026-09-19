import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j568bobeg.css';
import '../../css/t/tme_56i8r.css';
import '../../css/u/ugavslbec.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j568bobeg"/><path class="tme_56i8r"/><path class="ugavslbec"/></g>`,
		"fallback": "glyphs:plug-1-duo",
	});
}

export default Component;
