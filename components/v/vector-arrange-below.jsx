import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msvd_8nos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msvd_8nos"/>`,
		"fallback": "mdi-light:vector-arrange-below",
	});
}

export default Component;
