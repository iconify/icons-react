import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl6ew7bys.css';
import '../../css/d/dt926jbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl6ew7bys wm-k"/><path class="dt926jbqr wm-a"/>`,
		"fallback": "withicons-bauhaus:reply",
	});
}

export default Component;
