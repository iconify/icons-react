import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_shbeese.css';
import '../../css/y/yn8tzubog.css';
import '../../css/g/g7i4sdbnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_shbeese"/><path class="yn8tzubog"/><path class="g7i4sdbnm"/>`,
		"fallback": "fxemoji:shower",
	});
}

export default Component;
