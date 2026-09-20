import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pms-68f9j.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pms-68f9j"/>`,
		"fallback": "system-uicons:push-left",
	});
}

export default Component;
