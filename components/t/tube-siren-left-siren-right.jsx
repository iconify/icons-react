import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v97ouibln.css';
import '../../css/w/wyn_vbbql.css';
import '../../css/p/pi1ial8rd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v97ouibln"/><path class="wyn_vbbql"/><path class="pi1ial8rd"/>`,
		"fallback": "roentgen:tube-siren-left-siren-right",
	});
}

export default Component;
