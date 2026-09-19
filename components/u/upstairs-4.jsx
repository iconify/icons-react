import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfxua5sdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfxua5sdr"/>`,
		"fallback": "cbi:upstairs-4",
	});
}

export default Component;
