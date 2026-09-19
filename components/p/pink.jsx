import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g1mq_3eus.css';
import '../../css/x/xln0-bxve.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g1mq_3eus"/><path class="xln0-bxve"/></g>`,
		"fallback": "cryptocurrency:pink",
	});
}

export default Component;
