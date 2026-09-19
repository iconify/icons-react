import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ciwswkowe.css';
import '../../css/v/vjvavue8r.css';
import '../../css/s/skzg4r-hk.css';
import '../../css/j/japfaw1an.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ciwswkowe"/><path class="vjvavue8r"/><path clip-rule="evenodd" class="skzg4r-hk"/><path clip-rule="evenodd" class="japfaw1an"/></g>`,
		"fallback": "fluent-emoji-flat:pea-pod",
	});
}

export default Component;
