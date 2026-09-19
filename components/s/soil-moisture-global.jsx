import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0rewwboe.css';
import '../../css/r/rwf94xd_g.css';
import '../../css/a/axl75o_4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0rewwboe"/><path class="rwf94xd_g"/><path class="axl75o_4d"/>`,
		"fallback": "carbon:soil-moisture-global",
	});
}

export default Component;
