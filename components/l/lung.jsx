import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmbr7uw_z.css';
import '../../css/b/b_qi0n4ks.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a5s25x-ys.css';
import '../../css/o/oictz6_3j.css';
import '../../css/b/bjm2xzb6q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGGVFdJCnX" class="rmbr7uw_z"/></defs><use href="#SVGGVFdJCnX" class="b_qi0n4ks"/><g class="jn8qy4bru"><use href="#SVGGVFdJCnX"/><path class="a5s25x-ys"/><path class="oictz6_3j"/><path class="bjm2xzb6q"/></g>`,
		"fallback": "openmoji:lung",
	});
}

export default Component;
