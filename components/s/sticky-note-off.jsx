import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu6dt4bcc.css';
import '../../css/j/j20ig_gnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wu6dt4bcc"/><path class="j20ig_gnv"/></g>`,
		"fallback": "lucide:sticky-note-off",
	});
}

export default Component;
