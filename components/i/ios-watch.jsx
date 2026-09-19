import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcakmyo1t.css';
import '../../css/s/s9yq9kbzh.css';
import '../../css/a/asyevsbiz.css';
import '../../css/d/dehbkrbqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcakmyo1t"/><path class="s9yq9kbzh"/><path class="asyevsbiz"/><g><path class="dehbkrbqd"/></g>`,
		"fallback": "ion:ios-watch",
	});
}

export default Component;
