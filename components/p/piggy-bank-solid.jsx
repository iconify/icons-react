import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m4khwlour.css';
import '../../css/k/kgbqgtbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m4khwlour"/><path class="kgbqgtbpg wm-s"/></g>`,
		"fallback": "withicons:piggy-bank-solid",
	});
}

export default Component;
