import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uszf_sena.css';
import '../../css/w/wzdcrsbth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uszf_sena"/><path class="wzdcrsbth"/>`,
		"fallback": "energy-icons:mail-unread-20",
	});
}

export default Component;
