import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5_4c5bns.css';
import '../../css/t/tvqwrac8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5_4c5bns"/><path class="tvqwrac8d"/>`,
		"fallback": "ion:ios-monitor",
	});
}

export default Component;
