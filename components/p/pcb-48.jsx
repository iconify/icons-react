import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0y49ybbx.css';
import '../../css/e/ecfpntb8u.css';
import '../../css/e/ehob8bc4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0y49ybbx"/><path class="ecfpntb8u"/><path class="ehob8bc4v"/>`,
		"fallback": "energy-icons:pcb-48",
	});
}

export default Component;
