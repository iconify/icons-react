import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8b_cacmv.css';
import '../../css/h/hdwbqmb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k8b_cacmv"/><path class="hdwbqmb2e"/>`,
		"fallback": "solar:playlist-minimalistic-3-bold-duotone",
	});
}

export default Component;
