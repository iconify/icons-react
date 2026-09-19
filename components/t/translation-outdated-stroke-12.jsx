import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/und8i-7ur.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="und8i-7ur"/>`,
		"fallback": "garden:translation-outdated-stroke-12",
	});
}

export default Component;
