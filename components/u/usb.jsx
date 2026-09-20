import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay-_lhcfu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay-_lhcfu"/>`,
		"fallback": "zondicons:usb",
	});
}

export default Component;
