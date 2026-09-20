import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf06pbs2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf06pbs2h"/>`,
		"fallback": "selfhst:jula-dark",
	});
}

export default Component;
