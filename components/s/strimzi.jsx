import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq9uqiz4l.css';

const viewBox = {"width":281.94,"height":323.44,"left":39.28,"top":-1.97};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq9uqiz4l"/>`,
		"fallback": "thesvg:strimzi",
	});
}

export default Component;
