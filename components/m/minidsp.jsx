import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf8jptdul.css';
import '../../css/o/o1y82wb2y.css';
import '../../css/m/mstdj_b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf8jptdul"/><path class="o1y82wb2y"/><path class="mstdj_b5a"/>`,
		"fallback": "cbi:minidsp",
	});
}

export default Component;
