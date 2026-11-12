import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zew7-c2gj.css';
import '../../css/v/vea0ry4ig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zew7-c2gj"/><path class="vea0ry4ig"/>`,
		"fallback": "selfhst:nextbeats",
	});
}

export default Component;
