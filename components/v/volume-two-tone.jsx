import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x5ls4k8te.css';
import '../../css/h/h4ys7u38e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x5ls4k8te"/><path class="h4ys7u38e"/></g>`,
		"fallback": "keyline-icons:volume-two-tone",
	});
}

export default Component;
