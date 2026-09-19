import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsw-bb_vv.css';
import '../../css/l/lv1nsoira.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsw-bb_vv"/><path class="lv1nsoira"/>`,
		"fallback": "boxicons:mobile-ring",
	});
}

export default Component;
