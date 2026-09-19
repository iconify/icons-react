import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ha2lsv80e.css';
import '../../css/t/t17wrdbon.css';
import '../../css/y/yowglshyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ha2lsv80e"/><path class="t17wrdbon"/><path class="yowglshyh"/></g>`,
		"fallback": "hugeicons:software-uninstall",
	});
}

export default Component;
