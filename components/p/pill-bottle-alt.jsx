import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq0_fcblc.css';
import '../../css/o/ox5bagm_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b qq0_fcblc"/><path class="b ox5bagm_m"/>`,
		"fallback": "boxicons:pill-bottle-alt",
	});
}

export default Component;
