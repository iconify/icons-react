import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzgcm9b0v.css';
import '../../css/v/vscquvbsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzgcm9b0v"/><path class="vscquvbsf"/>`,
		"fallback": "energy-icons:seed-48",
	});
}

export default Component;
