import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/obk939lcu.css';
import '../../css/u/ui8bbrboc.css';
import '../../css/k/kj2waq_ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="obk939lcu"/><path clip-rule="evenodd" class="ui8bbrboc"/><path class="kj2waq_ni"/></g>`,
		"fallback": "keyline-icons:sticky-note-plus-sharp-duotone",
	});
}

export default Component;
