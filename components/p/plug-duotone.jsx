import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s9_zf1bnm.css';
import '../../css/m/m3pl5ubmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s9_zf1bnm"/><path class="m3pl5ubmo"/></g>`,
		"fallback": "keyline-icons:plug-duotone",
	});
}

export default Component;
