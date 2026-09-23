import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej-9rrbto.css';
import '../../css/o/o0b4ob_tu.css';
import '../../css/u/uu0t6t4ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ej-9rrbto"/><path class="o0b4ob_tu"/><path class="uu0t6t4ek"/></g>`,
		"fallback": "keyline-icons:message-square-sparkles-two-tone",
	});
}

export default Component;
