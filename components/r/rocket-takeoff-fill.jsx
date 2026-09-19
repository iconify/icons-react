import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fumo8lbch.css';
import '../../css/f/fhm30acxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fumo8lbch"/><path class="fhm30acxz"/></g>`,
		"fallback": "bi:rocket-takeoff-fill",
	});
}

export default Component;
