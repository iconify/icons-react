import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg1q7g7_v.css';
import '../../css/d/ddf3wjc0g.css';
import '../../css/e/etadpe14k.css';
import '../../css/k/kw4-ghb1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg1q7g7_v"/><path class="ddf3wjc0g"/><path class="etadpe14k"/><path class="kw4-ghb1t"/>`,
		"fallback": "selfhst:red-hat-lightspeed",
	});
}

export default Component;
