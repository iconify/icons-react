import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7nzr5vfc.css';
import '../../css/w/wbrmur83b.css';
import '../../css/t/tlpzu3bff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7nzr5vfc"/><path class="wbrmur83b"/><path class="tlpzu3bff"/>`,
		"fallback": "energy-icons:pickup-truck-20-bold",
	});
}

export default Component;
