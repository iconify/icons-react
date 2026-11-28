import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o49n02bnz.css';
import '../../css/a/agi7abb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o49n02bnz"/><path class="agi7abb2i"/></g>`,
		"fallback": "iconaut:layers-2",
	});
}

export default Component;
