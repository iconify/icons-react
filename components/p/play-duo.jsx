import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xxq47rbjg.css';
import '../../css/l/l6swvrbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xxq47rbjg"/><path class="l6swvrbfj"/></g>`,
		"fallback": "withicons:play-duo",
	});
}

export default Component;
