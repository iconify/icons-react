import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vi7lznbga.css';
import '../../css/r/r1r5m6bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vi7lznbga"/><rect class="r1r5m6bpe"/></g>`,
		"fallback": "lucide:vibrate",
	});
}

export default Component;
