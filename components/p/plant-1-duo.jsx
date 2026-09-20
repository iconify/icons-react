import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/g/glniabcpx.css';
import '../../css/a/aj0i5z8qi.css';
import '../../css/f/fvy3jcbuw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="glniabcpx"/><path class="aj0i5z8qi"/><path class="fvy3jcbuw"/></g>`,
		"fallback": "streamline-stickies-color:plant-1-duo",
	});
}

export default Component;
