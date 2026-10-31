import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u14h2nnim.css';
import '../../css/j/jv0fhacxo.css';
import '../../css/b/bg79nabpd.css';
import '../../css/m/mq7rj2aqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u14h2nnim wm-shadow"/><path class="jv0fhacxo wm-shadow"/><path class="bg79nabpd"/><path class="mq7rj2aqp"/></g>`,
		"fallback": "withicons-brutal:martini",
	});
}

export default Component;
