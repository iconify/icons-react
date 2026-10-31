import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ico_k8sza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ico_k8sza wm-k"/>`,
		"fallback": "withicons:signpost-gloss",
	});
}

export default Component;
