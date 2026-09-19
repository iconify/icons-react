import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zucd9qb1v.css';
import '../../css/f/fg7f58d-v.css';
import '../../css/m/m0zkjfp-k.css';
import '../../css/q/qhtcxpb7s.css';
import '../../css/o/o2wnw7b_b.css';
import '../../css/v/v813khbdi.css';
import '../../css/b/b8mnm37rk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zucd9qb1v"/><path class="fg7f58d-v"/><path class="m0zkjfp-k"/><path class="qhtcxpb7s"/><path class="o2wnw7b_b"/><path class="v813khbdi"/><path class="b8mnm37rk"/>`,
		"fallback": "carbon:status-partial-fail",
	});
}

export default Component;
