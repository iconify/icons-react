import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhwvs5d9z.css';
import '../../css/v/vd-1j2bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhwvs5d9z"/><path class="vd-1j2bcj"/></g>`,
		"fallback": "tabler:mail-question",
	});
}

export default Component;
