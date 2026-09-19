import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue-ztqgzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue-ztqgzb"/>`,
		"fallback": "game-icons:running-shoe",
	});
}

export default Component;
