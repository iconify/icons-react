import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxid3cb9n.css';
import '../../css/q/qzlfjrbvp.css';
import '../../css/j/jir-06z8s.css';
import '../../css/d/dqm5rhbrj.css';
import '../../css/y/yy31oqb_h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sxid3cb9n"/><path class="qzlfjrbvp"/><path class="jir-06z8s"/><path class="dqm5rhbrj"/><path class="yy31oqb_h"/></g>`,
		"fallback": "devicon:ocaml-wordmark",
	});
}

export default Component;
