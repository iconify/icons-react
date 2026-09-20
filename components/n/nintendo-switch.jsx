import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co33ozbue.css';
import '../../css/p/piy19x2pb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co33ozbue"/><path class="piy19x2pb"/>`,
		"fallback": "selfhst:nintendo-switch",
	});
}

export default Component;
