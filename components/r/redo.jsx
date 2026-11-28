import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gjhv5h2xq.css';
import '../../css/c/c55ku496r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gjhv5h2xq"/><path class="c55ku496r"/></g>`,
		"fallback": "iconaut:redo",
	});
}

export default Component;
