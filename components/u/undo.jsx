import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvh4r_b8g.css';
import '../../css/d/dt926jbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvh4r_b8g wm-k"/><path class="dt926jbqr wm-a"/>`,
		"fallback": "withicons-bauhaus:undo",
	});
}

export default Component;
