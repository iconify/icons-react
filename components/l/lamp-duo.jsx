import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i922wgbol.css';
import '../../css/a/anw3ijuct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i922wgbol"/><path class="anw3ijuct"/></g>`,
		"fallback": "withicons:lamp-duo",
	});
}

export default Component;
