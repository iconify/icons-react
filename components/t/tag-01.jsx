import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fxa6b0bfl.css';
import '../../css/r/r6hv7bc9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fxa6b0bfl"/><path class="r6hv7bc9k"/></g>`,
		"fallback": "hugeicons:tag-01",
	});
}

export default Component;
