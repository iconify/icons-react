import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhrxslnmz.css';
import '../../css/a/a65l708qm.css';
import '../../css/h/hd4-lcb-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhrxslnmz"/><path class="a65l708qm"/><path class="hd4-lcb-s"/>`,
		"fallback": "energy-icons:printer-48-bold",
	});
}

export default Component;
