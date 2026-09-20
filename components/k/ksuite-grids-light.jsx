import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og_f3_bmu.css';
import '../../css/w/waab1-svo.css';
import '../../css/q/qbc0ipycg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og_f3_bmu"/><path class="waab1-svo"/><path class="qbc0ipycg"/>`,
		"fallback": "selfhst:ksuite-grids-light",
	});
}

export default Component;
