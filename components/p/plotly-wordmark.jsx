import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9kp8bpx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc9kp8bpx"/>`,
		"fallback": "devicon-plain:plotly-wordmark",
	});
}

export default Component;
