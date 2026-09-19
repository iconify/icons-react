import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr7b1pcrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr7b1pcrx"/>`,
		"fallback": "cib:stack-overflow",
	});
}

export default Component;
