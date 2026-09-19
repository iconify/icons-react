import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onp76ic3j.css';
import '../../css/w/walry-bzx.css';
import '../../css/s/snrgtsb3g.css';
import '../../css/v/vx39oor0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onp76ic3j"/><path class="walry-bzx"/><path class="snrgtsb3g"/><path class="vx39oor0k"/>`,
		"fallback": "ion:social-windows-outline",
	});
}

export default Component;
