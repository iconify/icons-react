import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vms46pb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vms46pb2s"/>`,
		"fallback": "mdi:vector-square-close",
	});
}

export default Component;
