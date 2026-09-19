import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iw10st5zi.css';
import '../../css/f/f_yyjfmsx.css';
import '../../css/c/cge1rbc4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 5)" class="n1lsf0bnc"><path class="iw10st5zi"/><ellipse class="f_yyjfmsx"/><ellipse class="cge1rbc4r"/></g>`,
		"fallback": "si-glyph:skateboard",
	});
}

export default Component;
