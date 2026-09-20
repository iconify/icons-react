import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tah6431yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tah6431yv"/>`,
		"fallback": "tabler:navigation-heart",
	});
}

export default Component;
