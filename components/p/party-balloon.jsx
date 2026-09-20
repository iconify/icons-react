import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r28-5qbnn.css';
import '../../css/x/x7k9zt7ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r28-5qbnn"/><path class="x7k9zt7ei"/></g>`,
		"fallback": "streamline-ultimate:party-balloon",
	});
}

export default Component;
