import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb_7g2bxt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb_7g2bxt"/>`,
		"fallback": "maki:landmark",
	});
}

export default Component;
