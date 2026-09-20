import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smp8q2bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smp8q2bnk"/>`,
		"fallback": "mdi:watch-later",
	});
}

export default Component;
