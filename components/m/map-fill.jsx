import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gejohc1vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gejohc1vg"/>`,
		"fallback": "keyline-icons:map-fill",
	});
}

export default Component;
