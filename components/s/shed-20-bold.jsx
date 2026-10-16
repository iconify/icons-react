import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgedaabaz.css';
import '../../css/y/yfoxxnbix.css';
import '../../css/w/w4vjatb6b.css';
import '../../css/p/pjcct7b7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgedaabaz"/><path class="yfoxxnbix"/><path class="w4vjatb6b"/><path class="pjcct7b7l"/>`,
		"fallback": "energy-icons:shed-20-bold",
	});
}

export default Component;
