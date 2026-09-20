import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbp06qb8h.css';
import '../../css/h/hpzn55bhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbp06qb8h"/><path class="hpzn55bhk"/>`,
		"fallback": "selfhst:luna-dashboard-dark",
	});
}

export default Component;
