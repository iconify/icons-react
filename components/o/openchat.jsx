import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hh11ofkfj.css';
import '../../css/g/gitfnxp_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hh11ofkfj"/><path class="gitfnxp_d"/></g>`,
		"fallback": "thesvg:openchat",
	});
}

export default Component;
