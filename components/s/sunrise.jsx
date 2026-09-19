import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6-_h5bmw.css';
import '../../css/l/l8s_-sofp.css';
import '../../css/n/n26hyfvem.css';
import '../../css/a/ahmi5bb0y.css';
import '../../css/b/bohuwgbre.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6-_h5bmw"/><path class="l8s_-sofp"/><path class="n26hyfvem"/><path class="ahmi5bb0y"/><path class="bohuwgbre"/></g>`,
		"fallback": "fluent-emoji-flat:sunrise",
	});
}

export default Component;
