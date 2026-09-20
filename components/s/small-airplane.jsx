import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbr3nlb8f.css';
import '../../css/w/w2ofuy04y.css';
import '../../css/d/d42iltb2y.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/u/ulrt6uslr.css';
import '../../css/a/a2lf0gtfp.css';
import '../../css/x/xixoi3b2k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbr3nlb8f"/><path class="w2ofuy04y"/><path class="d42iltb2y"/><g class="rpvb-o6bq"><path class="ulrt6uslr"/><path class="a2lf0gtfp"/><path class="xixoi3b2k"/></g>`,
		"fallback": "openmoji:small-airplane",
	});
}

export default Component;
