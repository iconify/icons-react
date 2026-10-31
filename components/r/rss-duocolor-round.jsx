import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s513fwpno.css';
import '../../css/o/oz62puhki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s513fwpno"/><path class="oz62puhki"/></g>`,
		"fallback": "coolicons:rss-duocolor-round",
	});
}

export default Component;
