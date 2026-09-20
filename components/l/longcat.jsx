import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/gpzc3kb_a.css';
import '../../css/x/x-l1-u4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path clip-rule="evenodd" class="gpzc3kb_a"/><path class="x-l1-u4wm"/></g>`,
		"fallback": "thesvg-color:longcat",
	});
}

export default Component;
