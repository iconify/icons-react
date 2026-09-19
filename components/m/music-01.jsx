import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0mhb5-4c.css';
import '../../css/f/fdsc552_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="c0mhb5-4c"/><path class="fdsc552_s"/></g>`,
		"fallback": "hugeicons:music-01",
	});
}

export default Component;
