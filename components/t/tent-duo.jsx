import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fxpjof0ho.css';
import '../../css/k/koqkggbqh.css';
import '../../css/x/xlau4cdnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fxpjof0ho"/><path class="koqkggbqh wm-a"/><path class="xlau4cdnj"/></g>`,
		"fallback": "withicons:tent-duo",
	});
}

export default Component;
