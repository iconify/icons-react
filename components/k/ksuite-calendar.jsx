import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at_v43b2r.css';
import '../../css/b/b9e_alb_d.css';
import '../../css/e/eftbzl7cx.css';
import '../../css/g/g4ssyewpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at_v43b2r"/><path class="b9e_alb_d"/><path class="eftbzl7cx"/><path class="g4ssyewpa"/>`,
		"fallback": "selfhst:ksuite-calendar",
	});
}

export default Component;
