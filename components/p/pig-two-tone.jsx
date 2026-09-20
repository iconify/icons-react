import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vrg2kwn0l.css';
import '../../css/l/lh9j5h2ft.css';
import '../../css/g/g1p6t0b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vrg2kwn0l"/><path class="lh9j5h2ft"/><path class="g1p6t0b1u"/></g>`,
		"fallback": "keyline-icons:pig-two-tone",
	});
}

export default Component;
