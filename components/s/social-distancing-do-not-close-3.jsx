import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofpoembdd.css';
import '../../css/d/d27zkrbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ofpoembdd"/><path class="d27zkrbmt"/></g>`,
		"fallback": "covid:social-distancing-do-not-close-3",
	});
}

export default Component;
