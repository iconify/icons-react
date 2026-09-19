import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffyaq1wcl.css';
import '../../css/i/i-d09ab5o.css';
import '../../css/p/p7o_o6bnt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffyaq1wcl"/><path class="i-d09ab5o"/><path class="p7o_o6bnt"/>`,
		"fallback": "carbon:settings-check",
	});
}

export default Component;
