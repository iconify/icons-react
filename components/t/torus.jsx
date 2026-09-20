import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q0exz4q8e.css';
import '../../css/z/zcefhwbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="q0exz4q8e"/><ellipse class="zcefhwbwk"/></g>`,
		"fallback": "lucide:torus",
	});
}

export default Component;
