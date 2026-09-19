import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm4-0nyfo.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm4-0nyfo"/>`,
		"fallback": "fa:pause-circle",
	});
}

export default Component;
