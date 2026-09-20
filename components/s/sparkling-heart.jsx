import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm4miebwu.css';
import '../../css/y/yqcld6n-o.css';
import '../../css/x/xqfq2rb-p.css';
import '../../css/c/cxapisk7k.css';
import '../../css/t/t_11b-bla.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dvvnfjntn.css';
import '../../css/z/z81f041ae.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm4miebwu"/><path class="yqcld6n-o"/><path class="xqfq2rb-p"/><path class="cxapisk7k"/><path class="t_11b-bla"/><g class="jn8qy4bru"><path class="dvvnfjntn"/><path class="z81f041ae"/></g>`,
		"fallback": "openmoji:sparkling-heart",
	});
}

export default Component;
