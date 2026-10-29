import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1vr80fzk.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/n/nb-vlvbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q1vr80fzk"/><path class="gsm21sbrt wm-a"/><path class="nb-vlvbbc"/></g>`,
		"fallback": "withicons:taxi",
	});
}

export default Component;
