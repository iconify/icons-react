import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnafdbble.css';
import '../../css/i/in6vio3jf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnafdbble"/><path class="in6vio3jf"/>`,
		"fallback": "energy-icons:train-20",
	});
}

export default Component;
