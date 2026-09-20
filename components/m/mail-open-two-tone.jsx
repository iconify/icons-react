import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mocjaebre.css';
import '../../css/s/sgui6mb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mocjaebre"/><path class="sgui6mb8r"/></g>`,
		"fallback": "keyline-icons:mail-open-two-tone",
	});
}

export default Component;
