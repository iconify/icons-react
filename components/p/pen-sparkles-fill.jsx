import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hble56f9w.css';
import '../../css/q/qwkjko7pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hble56f9w"/><path class="qwkjko7pb"/></g>`,
		"fallback": "keyline-icons:pen-sparkles-fill",
	});
}

export default Component;
