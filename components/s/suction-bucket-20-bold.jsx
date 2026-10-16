import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfrd_82kf.css';
import '../../css/d/duje0ybob.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfrd_82kf"/><path class="duje0ybob"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:suction-bucket-20-bold",
	});
}

export default Component;
