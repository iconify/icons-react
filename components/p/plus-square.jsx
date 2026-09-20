import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp2p81jij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp2p81jij"/>`,
		"fallback": "uiw:plus-square",
	});
}

export default Component;
