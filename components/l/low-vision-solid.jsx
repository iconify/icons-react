import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k20xl2bcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k20xl2bcv"/>`,
		"fallback": "la:low-vision-solid",
	});
}

export default Component;
