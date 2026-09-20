import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6tk48f_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6tk48f_y"/>`,
		"fallback": "prime:thumbs-up-fill",
	});
}

export default Component;
