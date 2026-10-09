import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnmjmj1pi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnmjmj1pi"/>`,
		"fallback": "energy-icons:list-20",
	});
}

export default Component;
