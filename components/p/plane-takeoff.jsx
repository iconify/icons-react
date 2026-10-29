import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4k8x7q-f.css';
import '../../css/a/a34rrebrp.css';
import '../../css/p/ptdetsbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4k8x7q-f wm-k"/><path class="a34rrebrp wm-k"/><path class="ptdetsbsf wm-a"/>`,
		"fallback": "withicons-bauhaus:plane-takeoff",
	});
}

export default Component;
