import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-9_53bsu.css';
import '../../css/g/ganpu8bpr.css';
import '../../css/n/ntmuqq9ik.css';
import '../../css/a/alpw29bsk.css';
import '../../css/v/vc6wkob8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-9_53bsu wm-shadow"/><path class="ganpu8bpr wm-k"/><path class="ntmuqq9ik wm-k"/><path class="alpw29bsk wm-a"/><path class="vc6wkob8o wm-a"/>`,
		"fallback": "withicons-pastel:waves",
	});
}

export default Component;
