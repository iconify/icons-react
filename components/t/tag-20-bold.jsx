import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4a-q3f0p.css';
import '../../css/h/hq809sb1p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4a-q3f0p"/><path class="hq809sb1p"/>`,
		"fallback": "energy-icons:tag-20-bold",
	});
}

export default Component;
