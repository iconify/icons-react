import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzrqibpu.css';
import '../../css/i/ilum5ccux.css';
import '../../css/r/rtzhn3bfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzrqibpu"/><path class="ilum5ccux"/><path class="rtzhn3bfz"/>`,
		"fallback": "energy-icons:paint-bucket-20",
	});
}

export default Component;
