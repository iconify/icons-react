import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i19a46b-l.css';
import '../../css/k/kx4creg8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i19a46b-l"/><path class="kx4creg8t"/></g>`,
		"fallback": "lucide:umbrella",
	});
}

export default Component;
