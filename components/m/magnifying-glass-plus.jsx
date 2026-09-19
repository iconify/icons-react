import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzxakybne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzxakybne"/>`,
		"fallback": "fa6-solid:magnifying-glass-plus",
	});
}

export default Component;
