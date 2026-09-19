import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo8ktmbja.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo8ktmbja"/>`,
		"fallback": "foundation:social-digg",
	});
}

export default Component;
