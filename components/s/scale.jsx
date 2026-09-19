import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/facftvb6k.css';
import '../../css/b/b0lbrwbnb.css';
import '../../css/a/av59wqutr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="facftvb6k"/><path class="b0lbrwbnb"/><path clip-rule="evenodd" class="av59wqutr"/></g>`,
		"fallback": "hugeicons:scale",
	});
}

export default Component;
