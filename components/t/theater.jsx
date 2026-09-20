import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv5vjgbei.css';
import '../../css/v/vneka1b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iv5vjgbei"/><path class="vneka1b-n"/></g>`,
		"fallback": "lucide:theater",
	});
}

export default Component;
