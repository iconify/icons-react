import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fd31c4b-y.css';
import '../../css/x/x6bv9k0rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fd31c4b-y"/><path class="x6bv9k0rn"/></g>`,
		"fallback": "heroicons:tag",
	});
}

export default Component;
