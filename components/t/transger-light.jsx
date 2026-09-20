import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b5fj8t4eg.css';
import '../../css/m/m1amm_bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="b5fj8t4eg"/><path class="m1amm_bjp"/></g>`,
		"fallback": "lets-icons:transger-light",
	});
}

export default Component;
