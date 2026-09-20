import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jlvs6-k6s.css';
import '../../css/w/wv_quj4xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jlvs6-k6s"/><path class="wv_quj4xe"/></g>`,
		"fallback": "keyline-icons:pen-line-two-tone",
	});
}

export default Component;
