import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfxy13bkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfxy13bkq"/>`,
		"fallback": "energy-icons:road-20-bold",
	});
}

export default Component;
