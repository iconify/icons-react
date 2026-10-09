import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx6i4llwi.css';
import '../../css/w/woo7zdu1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx6i4llwi"/><path class="woo7zdu1m"/>`,
		"fallback": "energy-icons:kayak-20",
	});
}

export default Component;
