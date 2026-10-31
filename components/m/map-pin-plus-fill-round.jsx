import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfyvin1tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfyvin1tu"/>`,
		"fallback": "coolicons:map-pin-plus-fill-round",
	});
}

export default Component;
