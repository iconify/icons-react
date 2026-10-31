import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5voxibbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5voxibbb"/>`,
		"fallback": "coolicons:plane-landing-side-round",
	});
}

export default Component;
