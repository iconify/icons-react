import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cb82pd0la.css';
import '../../css/v/vba2tdvwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cb82pd0la"/><path class="vba2tdvwx"/></g>`,
		"fallback": "tabler:propeller-off",
	});
}

export default Component;
