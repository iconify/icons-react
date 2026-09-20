import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m4v0y8b4w.css';
import '../../css/k/kbqduub3z.css';
import '../../css/u/uml6tabfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m4v0y8b4w"/><path class="kbqduub3z"/><path class="uml6tabfw"/></g>`,
		"fallback": "streamline-freehand:phone-selfie-front",
	});
}

export default Component;
