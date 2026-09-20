import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri65of2nt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri65of2nt"/>`,
		"fallback": "selfhst:rancher-kubewarden-light",
	});
}

export default Component;
