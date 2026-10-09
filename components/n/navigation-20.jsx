import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvo5b-0za.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvo5b-0za"/>`,
		"fallback": "energy-icons:navigation-20",
	});
}

export default Component;
