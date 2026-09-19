import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfcwc_bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vfcwc_bpq"/>`,
		"fallback": "griddy-icons:shield-lock-filled",
	});
}

export default Component;
