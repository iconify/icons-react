import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp3_9h6db.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp3_9h6db"/>`,
		"fallback": "ix:navigation-right",
	});
}

export default Component;
