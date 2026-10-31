import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq_bupb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dq_bupb4i"/>`,
		"fallback": "lucide-extended:monitor-activity-filled",
	});
}

export default Component;
