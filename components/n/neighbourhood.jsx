import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/il3qnkxvf.css';
import '../../css/d/dn3chbbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="il3qnkxvf"/><path class="dn3chbbem"/></g>`,
		"fallback": "iconoir:neighbourhood",
	});
}

export default Component;
