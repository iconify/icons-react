import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_2v8v8uq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_2v8v8uq"/>`,
		"fallback": "garden:palette-fill-12",
	});
}

export default Component;
