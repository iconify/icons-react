import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knr_o8bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knr_o8bah"/>`,
		"fallback": "simple-icons:unilever",
	});
}

export default Component;
