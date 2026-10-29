import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c0qvd3bep.css';
import '../../css/h/hv91w3p5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c0qvd3bep"/><path class="hv91w3p5i wm-a"/></g>`,
		"fallback": "withicons:printer-solid",
	});
}

export default Component;
