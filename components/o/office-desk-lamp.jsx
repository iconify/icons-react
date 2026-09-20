import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iel2bybzv.css';
import '../../css/v/vu4k9migy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iel2bybzv"/><path class="vu4k9migy"/></g>`,
		"fallback": "streamline-freehand:office-desk-lamp",
	});
}

export default Component;
