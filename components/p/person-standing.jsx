import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kv858g4lj.css';
import '../../css/g/gte04cq_p.css';
import '../../css/b/b3nenspnx.css';
import '../../css/n/nqtkucbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kv858g4lj"/><path class="gte04cq_p"/><path class="b3nenspnx"/><path class="nqtkucbji"/></g>`,
		"fallback": "iconaut:person-standing",
	});
}

export default Component;
