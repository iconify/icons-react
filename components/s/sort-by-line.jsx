import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjxc_mbte.css';
import '../../css/k/kymntsbrh.css';
import '../../css/u/ua5y2ubth.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 gjxc_mbte"/><path class="clr-i-outline clr-i-outline-path-2 kymntsbrh"/><path class="clr-i-outline clr-i-outline-path-3 ua5y2ubth"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:sort-by-line",
	});
}

export default Component;
