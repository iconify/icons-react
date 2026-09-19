import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tygmpgx5r.css';
import '../../css/p/pin_d6b9x.css';
import '../../css/a/a5yv6_bwy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tygmpgx5r"/><path class="pin_d6b9x"/><path class="a5yv6_bwy"/>`,
		"fallback": "carbon:stacked-scrolling-1",
	});
}

export default Component;
