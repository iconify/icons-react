import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1ux52a_b.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1ux52a_b"/>`,
		"fallback": "fa:thermometer-full",
	});
}

export default Component;
