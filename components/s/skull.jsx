import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzmi8ew8a.css';
import '../../css/y/ye_kidbkp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kzmi8ew8a"/><path class="ye_kidbkp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:skull",
	});
}

export default Component;
