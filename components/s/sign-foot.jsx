import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxiao2i0k.css';
import '../../css/z/zaspabb0q.css';
import '../../css/b/bxb13fbzq.css';
import '../../css/s/s-sfg2b0d.css';
import '../../css/n/np6i7upya.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kxiao2i0k"/><ellipse class="zaspabb0q"/><ellipse class="bxb13fbzq"/><ellipse transform="rotate(-10.51 1.986 7.435)" class="s-sfg2b0d"/><path class="np6i7upya"/></g>`,
		"fallback": "si-glyph:sign-foot",
	});
}

export default Component;
