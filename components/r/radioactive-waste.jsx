import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfrh6248h.css';
import '../../css/m/mo4e03b2q.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/z/ztgu_b7hj.css';
import '../../css/q/qte5bqb6m.css';
import '../../css/o/o1v5dpbci.css';
import '../../css/r/rvss8j7bh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfrh6248h"/><path class="mo4e03b2q"/><g class="hzhb0bcwn"><path class="ztgu_b7hj"/><path class="qte5bqb6m"/><path class="o1v5dpbci"/><path class="rvss8j7bh"/></g>`,
		"fallback": "openmoji:radioactive-waste",
	});
}

export default Component;
