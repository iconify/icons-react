import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2ejlac0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2ejlac0b"/>`,
		"fallback": "fa6-brands:simplybuilt",
	});
}

export default Component;
