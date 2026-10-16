import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vayamib1a.css';
import '../../css/u/ut922vv1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vayamib1a"/><path class="ut922vv1z"/>`,
		"fallback": "energy-icons:junction-box-20-bold",
	});
}

export default Component;
