import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvhra_bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvhra_bzm"/>`,
		"fallback": "coolicons:signpost-round",
	});
}

export default Component;
