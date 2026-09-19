import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xdw8tmbkh.css';
import '../../css/l/l5icpj83l.css';
import '../../css/e/ev0t_bbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xdw8tmbkh"/><path class="l5icpj83l"/><path class="ev0t_bbup"/></g>`,
		"fallback": "hugeicons:mail-setting-02",
	});
}

export default Component;
