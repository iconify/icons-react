import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6a5nq_5m.css';
import '../../css/l/lw80oobkb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6a5nq_5m"/><path class="lw80oobkb"/>`,
		"fallback": "ion:ios-power",
	});
}

export default Component;
