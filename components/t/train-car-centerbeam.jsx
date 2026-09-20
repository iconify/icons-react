import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnbxl2bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnbxl2bpx"/>`,
		"fallback": "mdi:train-car-centerbeam",
	});
}

export default Component;
