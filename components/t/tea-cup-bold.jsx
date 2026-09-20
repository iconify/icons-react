import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/py52tgb9q.css';
import '../../css/g/g6hqg8bur.css';
import '../../css/a/am2robbdt.css';
import '../../css/s/snz9nhb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="py52tgb9q"/><path class="g6hqg8bur"/><path class="am2robbdt"/><path class="snz9nhb8q"/></g>`,
		"fallback": "solar:tea-cup-bold",
	});
}

export default Component;
