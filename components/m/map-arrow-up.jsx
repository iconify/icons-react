import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-5h5pbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-5h5pbmc"/>`,
		"fallback": "reicon:map-arrow-up",
	});
}

export default Component;
