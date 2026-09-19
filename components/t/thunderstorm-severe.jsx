import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v92du4b9z.css';
import '../../css/l/l7b_ym2oe.css';
import '../../css/q/qw0bgzezr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v92du4b9z"/><path class="l7b_ym2oe"/><path class="qw0bgzezr"/>`,
		"fallback": "carbon:thunderstorm-severe",
	});
}

export default Component;
