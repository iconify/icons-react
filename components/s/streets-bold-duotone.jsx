import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfp_v5kne.css';
import '../../css/o/ow6-kpbfs.css';
import '../../css/q/qcydym7-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfp_v5kne"/><path class="ow6-kpbfs"/><path class="qcydym7-o"/>`,
		"fallback": "solar:streets-bold-duotone",
	});
}

export default Component;
