import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwiag_bln.css';
import '../../css/w/wzeup5m6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwiag_bln"/><path class="wzeup5m6t"/>`,
		"fallback": "boxicons:rocket-alt",
	});
}

export default Component;
