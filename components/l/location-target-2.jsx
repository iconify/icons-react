import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iozmfob3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iozmfob3i"/>`,
		"fallback": "streamline-flex:location-target-2",
	});
}

export default Component;
