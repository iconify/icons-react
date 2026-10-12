import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8c7mwbrw.css';
import '../../css/w/wm5561bcz.css';
import '../../css/i/i8xqukhzb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8c7mwbrw"/><path class="wm5561bcz"/><path class="i8xqukhzb"/>`,
		"fallback": "energy-icons:split-20",
	});
}

export default Component;
