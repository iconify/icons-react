import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt8cwocyy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt8cwocyy"/>`,
		"fallback": "memory:quarterstaff",
	});
}

export default Component;
