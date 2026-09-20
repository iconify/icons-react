import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl_vlo1qn.css';
import '../../css/c/cmb2wab2t.css';
import '../../css/e/ez7qb80yj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl_vlo1qn"/><path class="cmb2wab2t"/><path clip-rule="evenodd" class="ez7qb80yj"/>`,
		"fallback": "oui:vis-query-ppl",
	});
}

export default Component;
