import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cy5l3qugy.css';
import '../../css/c/c8sr93g9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cy5l3qugy"/><path class="c8sr93g9e"/></g>`,
		"fallback": "iconoir:keyframes-couple",
	});
}

export default Component;
