import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcasx0bxr.css';
import '../../css/n/n980ub85d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcasx0bxr"/><path class="n980ub85d"/>`,
		"fallback": "eos-icons:monitoring",
	});
}

export default Component;
