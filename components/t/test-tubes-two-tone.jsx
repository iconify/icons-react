import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z23h2kbhj.css';
import '../../css/o/oqeq4_wjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z23h2kbhj"/><path class="oqeq4_wjs"/></g>`,
		"fallback": "keyline-icons:test-tubes-two-tone",
	});
}

export default Component;
