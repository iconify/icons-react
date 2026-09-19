import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k5xjvnkdz.css';
import '../../css/k/kzzr43bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k5xjvnkdz"/><path class="kzzr43bgj"/></g>`,
		"fallback": "hugeicons:location-06",
	});
}

export default Component;
