import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdjxh7b1z.css';
import '../../css/u/utq4fcbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdjxh7b1z"/><path class="utq4fcbnx"/>`,
		"fallback": "streamline-ultimate:road-tunnel-bold",
	});
}

export default Component;
