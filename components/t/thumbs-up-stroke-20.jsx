import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv1dmxb2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv1dmxb2e"/>`,
		"fallback": "garden:thumbs-up-stroke-20",
	});
}

export default Component;
