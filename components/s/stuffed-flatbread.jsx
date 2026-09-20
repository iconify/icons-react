import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9nflpb5z.css';
import '../../css/z/zr6ckqbjg.css';
import '../../css/y/y-ym3ibmz.css';
import '../../css/w/w---8vbga.css';
import '../../css/l/leg7_wbus.css';
import '../../css/u/usjeh1bwt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hdaszwb3b.css';
import '../../css/p/p65g7fcod.css';
import '../../css/b/bzpzn1knp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w9nflpb5z"/><path class="zr6ckqbjg"/><path class="y-ym3ibmz"/><path class="w---8vbga"/><path class="leg7_wbus"/><path class="usjeh1bwt"/><g class="jn8qy4bru"><path class="hdaszwb3b"/><path class="p65g7fcod"/><path class="bzpzn1knp"/></g>`,
		"fallback": "openmoji:stuffed-flatbread",
	});
}

export default Component;
