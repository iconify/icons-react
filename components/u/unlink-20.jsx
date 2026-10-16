import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge6gn80ys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge6gn80ys"/>`,
		"fallback": "energy-icons:unlink-20",
	});
}

export default Component;
