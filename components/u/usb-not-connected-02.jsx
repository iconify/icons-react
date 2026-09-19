import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j4besrixy.css';
import '../../css/o/o9ghvyl0a.css';
import '../../css/s/s_auppb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j4besrixy"/><path class="o9ghvyl0a"/><path class="s_auppb6i"/></g>`,
		"fallback": "hugeicons:usb-not-connected-02",
	});
}

export default Component;
