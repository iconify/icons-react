import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqhlzqbqh.css';
import '../../css/w/wt-lpqbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqhlzqbqh"/><path clip-rule="evenodd" class="wt-lpqbxt"/>`,
		"fallback": "solar:star-fall-minimalistic-2-bold",
	});
}

export default Component;
