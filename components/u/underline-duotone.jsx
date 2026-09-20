import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzmwhsbwv.css';
import '../../css/r/r3af1abja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzmwhsbwv"/><path class="r3af1abja"/></g>`,
		"fallback": "keyline-icons:underline-duotone",
	});
}

export default Component;
