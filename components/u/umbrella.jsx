import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a-o3p70ho.css';
import '../../css/k/kg4g4hx7l.css';
import '../../css/k/k-rq_votj.css';
import '../../css/c/cqc7tx56v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a-o3p70ho wm-shadow"/><path class="kg4g4hx7l wm-shadow"/><path class="k-rq_votj"/><path class="cqc7tx56v"/></g>`,
		"fallback": "withicons-brutal:umbrella",
	});
}

export default Component;
