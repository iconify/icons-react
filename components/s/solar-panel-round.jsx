import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmrd2btws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmrd2btws"/>`,
		"fallback": "coolicons:solar-panel-round",
	});
}

export default Component;
