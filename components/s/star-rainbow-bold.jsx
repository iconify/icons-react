import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_vbaf13b.css';
import '../../css/h/hlvndtg7m.css';
import '../../css/s/slav_jzds.css';
import '../../css/m/m7wnxobqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_vbaf13b"/><path class="hlvndtg7m"/><path class="slav_jzds"/><path class="m7wnxobqf"/>`,
		"fallback": "solar:star-rainbow-bold",
	});
}

export default Component;
