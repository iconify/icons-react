import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ni2-b3j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gjhv5h2xq.css';
import '../../css/c/c55ku496r.css';
import '../../css/s/scjaohbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ni2-b3j secondary"/><g class="dt0cm9dhy primary"><path class="gjhv5h2xq"/><path class="c55ku496r"/><path class="scjaohbsy"/></g>`,
		"fallback": "iconaut:redo-dot-duo",
	});
}

export default Component;
