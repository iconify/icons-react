import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gkk90rbam.css';
import '../../css/h/hxzmgwzjw.css';
import '../../css/b/bognoeqpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gkk90rbam"/><path class="hxzmgwzjw"/><path clip-rule="evenodd" class="bognoeqpu"/></g>`,
		"fallback": "iconoir:internet",
	});
}

export default Component;
