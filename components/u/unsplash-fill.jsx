import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5cc4gltw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5cc4gltw"/>`,
		"fallback": "ri:unsplash-fill",
	});
}

export default Component;
