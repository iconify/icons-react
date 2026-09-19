import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4-_vlatj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4-_vlatj"/>`,
		"fallback": "file-icons:verilog",
	});
}

export default Component;
