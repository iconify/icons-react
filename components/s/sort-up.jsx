import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/c0yp3kbar.css';
import '../../css/l/l74h3ibbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="c0yp3kbar"/><path class="l74h3ibbm"/></g>`,
		"fallback": "lets-icons:sort-up",
	});
}

export default Component;
