import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/krlqhg1vv.css';
import '../../css/g/gjhk4hg9v.css';
import '../../css/k/kyw7u59pj.css';
import '../../css/q/q69l88bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="krlqhg1vv wm-shadow"/><path class="gjhk4hg9v"/><path class="kyw7u59pj"/><path class="q69l88bkf"/></g>`,
		"fallback": "withicons-retro:virus",
	});
}

export default Component;
