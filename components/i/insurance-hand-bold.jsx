import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvl2pzwmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvl2pzwmx"/>`,
		"fallback": "streamline-ultimate:insurance-hand-bold",
	});
}

export default Component;
