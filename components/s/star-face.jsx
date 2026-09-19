import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fuc1n9wvy.css';
import '../../css/c/crd3eebtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fuc1n9wvy"/><path class="crd3eebtk"/></g>`,
		"fallback": "hugeicons:star-face",
	});
}

export default Component;
