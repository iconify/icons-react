import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxr_0bc2h.css';
import '../../css/y/yqpjzibdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxr_0bc2h wm-a"/><path class="wm-k yqpjzibdt"/>`,
		"fallback": "withicons-bauhaus:thumbs-up",
	});
}

export default Component;
