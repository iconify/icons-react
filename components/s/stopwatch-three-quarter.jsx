import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4wz5u5le.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4wz5u5le"/>`,
		"fallback": "streamline-flex:stopwatch-three-quarter",
	});
}

export default Component;
