import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhe2_49up.css';
import '../../css/t/t4orpzvpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhe2_49up"/><path class="t4orpzvpd"/></g>`,
		"fallback": "keyline-icons:test-tube-diagonal-fill",
	});
}

export default Component;
