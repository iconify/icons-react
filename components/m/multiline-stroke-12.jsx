import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqar3gbvs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqar3gbvs"/>`,
		"fallback": "garden:multiline-stroke-12",
	});
}

export default Component;
