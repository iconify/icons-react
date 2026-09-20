import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf9f82bnh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf9f82bnh"/>`,
		"fallback": "teenyicons:netlify-outline",
	});
}

export default Component;
