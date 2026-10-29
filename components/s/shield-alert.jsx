import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6cq0z4kl.css';
import '../../css/m/m47_gshyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6cq0z4kl wm-k"/><path class="m47_gshyo wm-a"/>`,
		"fallback": "withicons-bauhaus:shield-alert",
	});
}

export default Component;
