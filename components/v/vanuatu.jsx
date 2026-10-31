import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmdi9b5k.css';
import '../../css/s/s50x3_b2i.css';
import '../../css/o/o2tb1bdsp.css';
import '../../css/c/cetjp6fgq.css';
import '../../css/d/dhc9u21yx.css';
import '../../css/p/pyji0cf5r.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmmdi9b5k"/><path class="s50x3_b2i"/><path class="o2tb1bdsp"/><path class="cetjp6fgq"/><path class="dhc9u21yx"/><path class="pyji0cf5r"/>`,
		"fallback": "tabler-flags:vanuatu",
	});
}

export default Component;
