import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c77vne7ui.css';
import '../../css/w/w177c5zkh.css';
import '../../css/n/nidoksbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c77vne7ui"/><path class="w177c5zkh"/><path class="nidoksbkg"/>`,
		"fallback": "solar:round-double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
