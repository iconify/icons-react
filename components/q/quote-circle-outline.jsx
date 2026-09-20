import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qtnrgmqcu.css';
import '../../css/g/g8ko324ru.css';
import '../../css/n/nwp387s1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qtnrgmqcu"/><path class="g8ko324ru"/><path class="nwp387s1b"/></g>`,
		"fallback": "solar:quote-circle-outline",
	});
}

export default Component;
