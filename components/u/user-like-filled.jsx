import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc_550b6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vc_550b6n"/>`,
		"fallback": "lsicon:user-like-filled",
	});
}

export default Component;
