import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iddxiwbab.css';
import '../../css/a/ae3eb1bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="iddxiwbab"/><path class="ae3eb1bqt"/></g>`,
		"fallback": "lets-icons:water-light",
	});
}

export default Component;
