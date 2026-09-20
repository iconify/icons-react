import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2gw0hbsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2gw0hbsr"/>`,
		"fallback": "raphael:magnet",
	});
}

export default Component;
