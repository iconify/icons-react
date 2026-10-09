import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g277awvop.css';
import '../../css/x/x00tm8b5y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g277awvop"/><path class="x00tm8b5y"/>`,
		"fallback": "energy-icons:prism-20",
	});
}

export default Component;
