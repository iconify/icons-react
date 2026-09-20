import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey75k4bkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey75k4bkr"/>`,
		"fallback": "selfhst:penn-state-nittany-lions-light",
	});
}

export default Component;
