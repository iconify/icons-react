import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giolxtb7t.css';
import '../../css/s/siz39bbgs.css';
import '../../css/u/u5-w1ybvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giolxtb7t"/><path class="siz39bbgs"/><path class="u5-w1ybvt"/>`,
		"fallback": "cbi:maxxair-fan-delux-open",
	});
}

export default Component;
