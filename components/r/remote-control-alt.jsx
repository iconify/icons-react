import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0ipyvbvm.css';

const viewBox = {"width":336,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0ipyvbvm"/>`,
		"fallback": "zmdi:remote-control-alt",
	});
}

export default Component;
