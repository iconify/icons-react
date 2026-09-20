import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdd1lsb_h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdd1lsb_h"/>`,
		"fallback": "temaki:kerb-raised",
	});
}

export default Component;
