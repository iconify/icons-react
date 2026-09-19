import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qux8kuy1s.css';

const viewBox = {"width":2304,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qux8kuy1s"/>`,
		"fallback": "fa:tripadvisor",
	});
}

export default Component;
