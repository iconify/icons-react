import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nr8nvqbya.css';
import '../../css/i/ijmjqkvxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nr8nvqbya"/><path class="ijmjqkvxj wm-a"/></g>`,
		"fallback": "withicons:sun-dim-solid",
	});
}

export default Component;
