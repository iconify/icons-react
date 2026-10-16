import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptizy_zew.css';
import '../../css/u/u-8r7_bwc.css';
import '../../css/u/usgixfbzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptizy_zew"/><path class="u-8r7_bwc"/><path class="usgixfbzp"/>`,
		"fallback": "energy-icons:settlement-20-bold",
	});
}

export default Component;
