import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmu_k5bmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmu_k5bmf"/>`,
		"fallback": "selfhst:metadata-remote-dark",
	});
}

export default Component;
