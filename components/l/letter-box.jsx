import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qia54wv4o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qia54wv4o"/>`,
		"fallback": "temaki:letter-box",
	});
}

export default Component;
