import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsl62v89g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsl62v89g"/>`,
		"fallback": "garden:speech-bubble-plain-fill-12",
	});
}

export default Component;
