import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xi2w5nt2z.css';
import '../../css/r/rycj10btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xi2w5nt2z"/><path class="rycj10btr"/></g>`,
		"fallback": "keyline-icons:list-collapse-horizontal-duotone",
	});
}

export default Component;
