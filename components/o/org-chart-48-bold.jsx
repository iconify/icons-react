import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t57i_tbgc.css';
import '../../css/d/ds0h63bwt.css';
import '../../css/m/mfzxk5a_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t57i_tbgc"/><path class="ds0h63bwt"/><path class="mfzxk5a_d"/>`,
		"fallback": "energy-icons:org-chart-48-bold",
	});
}

export default Component;
