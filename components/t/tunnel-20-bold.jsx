import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvt5-9uoj.css';
import '../../css/w/w-jbejb_h.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvt5-9uoj"/><path class="w-jbejb_h"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:tunnel-20-bold",
	});
}

export default Component;
