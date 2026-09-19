import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqhhrj0le.css';
import '../../css/g/gt9eulz_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqhhrj0le"/><path class="gt9eulz_o"/>`,
		"fallback": "boxicons:nut",
	});
}

export default Component;
