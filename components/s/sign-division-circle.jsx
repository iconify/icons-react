import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u-bwlaclv.css';
import '../../css/t/t7kbs74kt.css';
import '../../css/k/kvgksqi2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="u-bwlaclv"/><path class="t7kbs74kt"/><path class="kvgksqi2r"/></g>`,
		"fallback": "iconamoon:sign-division-circle",
	});
}

export default Component;
