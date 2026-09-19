import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg5hyabrf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg5hyabrf"/>`,
		"fallback": "devicon-plain:ruby",
	});
}

export default Component;
