import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/c/clvf63btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgka1gbzk"/><path class="clvf63btf wm-a"/></g>`,
		"fallback": "withicons:pill-bottle",
	});
}

export default Component;
