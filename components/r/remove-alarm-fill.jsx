import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiqiw5b2f.css';
import '../../css/w/wz4v0s-qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiqiw5b2f"/><path clip-rule="evenodd" class="wz4v0s-qh"/>`,
		"fallback": "si:remove-alarm-fill",
	});
}

export default Component;
