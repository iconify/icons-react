import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/ehm1dq_ba.css';
import '../../css/b/b0bpa7bso.css';
import '../../css/z/zx9t5c1ep.css';
import '../../css/a/a33dbvblr.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="ehm1dq_ba"/><path class="b0bpa7bso"/><path class="zx9t5c1ep"/></g><path class="a33dbvblr"/>`,
		"fallback": "flag:sn-4x3",
	});
}

export default Component;
