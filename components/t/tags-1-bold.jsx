import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjyk13fxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjyk13fxn"/>`,
		"fallback": "streamline-ultimate:tags-1-bold",
	});
}

export default Component;
