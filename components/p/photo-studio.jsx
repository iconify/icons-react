import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r-qavsvxr.css';
import '../../css/q/qur47fbzu.css';
import '../../css/i/i01q7abel.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r-qavsvxr"/><path class="qur47fbzu"/><path class="i01q7abel"/></g>`,
		"fallback": "pepicons:photo-studio",
	});
}

export default Component;
