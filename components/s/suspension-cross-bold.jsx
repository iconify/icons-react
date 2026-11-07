import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdivp_bxj.css';
import '../../css/g/gh2z3q1ep.css';
import '../../css/u/uclgd2b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdivp_bxj"/><path class="gh2z3q1ep"/><path class="uclgd2b0i"/>`,
		"fallback": "solar:suspension-cross-bold",
	});
}

export default Component;
