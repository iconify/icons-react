import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p63lpxbhg.css';
import '../../css/g/gxnzrob6v.css';
import '../../css/t/tkq46hbva.css';
import '../../css/l/l75xwsb9d.css';

const viewBox = {"width":1000,"height":1007.85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p63lpxbhg"><path class="gxnzrob6v"/><path class="tkq46hbva"/><path class="l75xwsb9d"/></g>`,
		"fallback": "thesvg-color:take-two",
	});
}

export default Component;
