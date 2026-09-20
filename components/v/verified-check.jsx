import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ilhbiwonf.css';
import '../../css/q/qis60ub_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ilhbiwonf"/><path class="qis60ub_f"/></g>`,
		"fallback": "mage:verified-check",
	});
}

export default Component;
