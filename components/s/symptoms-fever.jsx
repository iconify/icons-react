import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ynlcsab1g.css';
import '../../css/n/nno0nubpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ynlcsab1g"/><path class="nno0nubpa"/></g>`,
		"fallback": "covid:symptoms-fever",
	});
}

export default Component;
