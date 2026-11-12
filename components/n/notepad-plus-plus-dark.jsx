import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfh9e8-4g.css';
import '../../css/a/aou0j_yla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfh9e8-4g"/><path class="aou0j_yla"/>`,
		"fallback": "selfhst:notepad-plus-plus-dark",
	});
}

export default Component;
