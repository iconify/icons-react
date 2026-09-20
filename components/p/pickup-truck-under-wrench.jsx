import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh5krp3xg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh5krp3xg"/>`,
		"fallback": "pinhead:pickup-truck-under-wrench",
	});
}

export default Component;
