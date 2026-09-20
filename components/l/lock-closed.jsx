import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv3lvgb1x.css';
import '../../css/c/cp_z6dbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv3lvgb1x"/><path class="cp_z6dbzo"/>`,
		"fallback": "stash:lock-closed",
	});
}

export default Component;
