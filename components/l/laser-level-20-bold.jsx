import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7byejq-o.css';
import '../../css/c/c3mb_pbac.css';
import '../../css/p/poj_abb7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7byejq-o"/><path class="c3mb_pbac"/><path class="poj_abb7e"/>`,
		"fallback": "energy-icons:laser-level-20-bold",
	});
}

export default Component;
