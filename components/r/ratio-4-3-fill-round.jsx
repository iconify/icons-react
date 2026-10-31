import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0brvyb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0brvyb2t"/>`,
		"fallback": "coolicons:ratio-4-3-fill-round",
	});
}

export default Component;
