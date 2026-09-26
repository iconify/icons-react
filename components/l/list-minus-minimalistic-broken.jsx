import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8edcu39k.css';
import '../../css/c/cvwfe6bhh.css';
import '../../css/q/q77q3mvdo.css';
import '../../css/g/glpogpcqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8edcu39k"/><path class="cvwfe6bhh"/><path class="q77q3mvdo"/><path class="glpogpcqk"/></g>`,
		"fallback": "solar:list-minus-minimalistic-broken",
	});
}

export default Component;
