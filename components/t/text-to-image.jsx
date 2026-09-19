import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bu2a7ab-m.css';
import '../../css/n/n2i9zdrgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bu2a7ab-m"/><path class="n2i9zdrgm"/></g>`,
		"fallback": "hugeicons:text-to-image",
	});
}

export default Component;
