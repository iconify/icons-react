import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/t/tf_hn4bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="tf_hn4bjm"/>`,
		"fallback": "tdesign:task-filled",
	});
}

export default Component;
