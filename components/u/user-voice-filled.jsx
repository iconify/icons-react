import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmp9nzblx.css';
import '../../css/f/fnb-t_u4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmp9nzblx"/><path class="fnb-t_u4r"/>`,
		"fallback": "boxicons:user-voice-filled",
	});
}

export default Component;
