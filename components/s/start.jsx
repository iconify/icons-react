import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awg3alaya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awg3alaya"/>`,
		"fallback": "cryptocurrency:start",
	});
}

export default Component;
