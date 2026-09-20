import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcs8ekolk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcs8ekolk"/>`,
		"fallback": "streamline-sharp:necktie-solid",
	});
}

export default Component;
