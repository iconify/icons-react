import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r62347llr.css';
import '../../css/s/s9_132ctu.css';
import '../../css/q/qdt5y7bmn.css';
import '../../css/v/v7zy9tb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r62347llr"/><path class="s9_132ctu"/><path class="qdt5y7bmn"/><path class="v7zy9tb3t"/>`,
		"fallback": "solar:shield-bold",
	});
}

export default Component;
