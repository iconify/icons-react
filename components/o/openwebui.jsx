import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g9od2_b1c.css';
import '../../css/g/gexzjokqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="g9od2_b1c"/><path class="gexzjokqz"/></g>`,
		"fallback": "thesvg:openwebui",
	});
}

export default Component;
