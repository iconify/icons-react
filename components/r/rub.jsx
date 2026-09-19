import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfqf04b7n.css';

const viewBox = {"width":1280,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfqf04b7n"/>`,
		"fallback": "fa:rub",
	});
}

export default Component;
