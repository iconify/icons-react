import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai6km_1tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai6km_1tr"/>`,
		"fallback": "thesvg-color:stability-stablediffusion",
	});
}

export default Component;
