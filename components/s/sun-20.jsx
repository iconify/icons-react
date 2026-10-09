import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poz0mu_8q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poz0mu_8q"/>`,
		"fallback": "energy-icons:sun-20",
	});
}

export default Component;
