import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj3q2nb3r.css';
import '../../css/q/qye5rv-6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sj3q2nb3r"/><path class="qye5rv-6h"/></g>`,
		"fallback": "keyline-icons:mail-plus-fill",
	});
}

export default Component;
