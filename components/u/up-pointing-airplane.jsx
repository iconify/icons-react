import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-f4bv3pj.css';
import '../../css/s/sunwu9bsd.css';
import '../../css/f/fj5ngibig.css';
import '../../css/n/nnb6rcb4d.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/g/g7asqnu7b.css';
import '../../css/d/dn0cr3lwj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-f4bv3pj"/><path class="sunwu9bsd"/><path class="fj5ngibig"/><path class="nnb6rcb4d"/><g class="sxsjrzbyv"><path class="g7asqnu7b"/><path class="dn0cr3lwj"/></g>`,
		"fallback": "openmoji:up-pointing-airplane",
	});
}

export default Component;
