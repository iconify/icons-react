import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf5b9zb0i.css';
import '../../css/c/cxauthb-e.css';
import '../../css/m/mkkfhejzs.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/u/u9aexgktk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vf5b9zb0i"><circle class="cxauthb-e"/><path class="mkkfhejzs"/></g><g class="x8poo_bjf"><circle class="cxauthb-e"/><path class="u9aexgktk"/></g>`,
		"fallback": "openmoji:man-dancing-medium-dark-skin-tone",
	});
}

export default Component;
