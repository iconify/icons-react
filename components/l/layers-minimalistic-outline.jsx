import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz0c-7acw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz0c-7acw"/>`,
		"fallback": "solar:layers-minimalistic-outline",
	});
}

export default Component;
