import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkxrg8bqx.css';
import '../../css/v/vcwbpi0dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkxrg8bqx"/><path class="vcwbpi0dq"/>`,
		"fallback": "tdesign:screencast-filled",
	});
}

export default Component;
