import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcxadpb_v.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcxadpb_v"/>`,
		"fallback": "icomoon-free:keyboard",
	});
}

export default Component;
