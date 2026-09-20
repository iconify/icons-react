import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8dypr8nz.css';
import '../../css/h/h_vhetbrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f8dypr8nz"/><path class="h_vhetbrl"/></g>`,
		"fallback": "keyline-icons:podium-1-two-tone",
	});
}

export default Component;
