import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyor4ib3a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyor4ib3a"/>`,
		"fallback": "fa7-brands:ubuntu",
	});
}

export default Component;
