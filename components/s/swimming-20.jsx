import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa37jgblw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa37jgblw"/>`,
		"fallback": "energy-icons:swimming-20",
	});
}

export default Component;
