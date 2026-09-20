import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-n4_vbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-n4_vbkt"/>`,
		"fallback": "vadivam:message-circle-dashed",
	});
}

export default Component;
