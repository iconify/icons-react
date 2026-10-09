import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfoxxnbix.css';
import '../../css/y/yhs2jn2-c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfoxxnbix"/><path class="yhs2jn2-c"/>`,
		"fallback": "energy-icons:ruins-20-bold",
	});
}

export default Component;
