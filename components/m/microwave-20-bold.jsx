import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grlqybb5l.css';
import '../../css/q/q4-kh7ybm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grlqybb5l"/><path class="q4-kh7ybm"/>`,
		"fallback": "energy-icons:microwave-20-bold",
	});
}

export default Component;
