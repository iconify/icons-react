import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohw09gbrd.css';
import '../../css/w/wdencf02y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ohw09gbrd"/><path class="wdencf02y"/></g>`,
		"fallback": "mage:screencast",
	});
}

export default Component;
