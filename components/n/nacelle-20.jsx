import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjzhse32s.css';
import '../../css/y/y-a7xo-fg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjzhse32s"/><path class="y-a7xo-fg"/>`,
		"fallback": "energy-icons:nacelle-20",
	});
}

export default Component;
