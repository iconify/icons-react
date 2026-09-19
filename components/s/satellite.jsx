import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kng4tqqkm.css';
import '../../css/f/fpr5nebaz.css';
import '../../css/s/soimjxbmh.css';
import '../../css/o/oh4h4acrz.css';
import '../../css/k/khw9z6bdn.css';
import '../../css/i/iivsumb0a.css';
import '../../css/w/wwslbi71t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kng4tqqkm"/><path class="fpr5nebaz"/><path class="soimjxbmh"/><path clip-rule="evenodd" class="oh4h4acrz"/><path class="khw9z6bdn"/><path class="iivsumb0a"/><path class="wwslbi71t"/></g>`,
		"fallback": "glyphs-poly:satellite",
	});
}

export default Component;
