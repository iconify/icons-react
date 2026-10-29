import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bff17mbwi.css';
import '../../css/a/amvjxdb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bff17mbwi"/><path class="amvjxdb3j wm-a"/></g>`,
		"fallback": "withicons:medal-solid",
	});
}

export default Component;
