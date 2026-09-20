import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fznb90gae.css';
import '../../css/t/tityt4exd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="fznb90gae"/><path class="tityt4exd"/></g>`,
		"fallback": "lets-icons:refresh-light",
	});
}

export default Component;
