import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcl2e-hth.css';
import '../../css/d/dnt6pzbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcl2e-hth"/><path class="dnt6pzbsr"/>`,
		"fallback": "boxicons:shape-rotate-cw-filled",
	});
}

export default Component;
