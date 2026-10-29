import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bva-rt2by.css';
import '../../css/q/qmo10bbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bva-rt2by"/><path class="qmo10bbis wm-a"/></g>`,
		"fallback": "withicons:train-solid",
	});
}

export default Component;
