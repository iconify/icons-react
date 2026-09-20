import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n94bshbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n94bshbgl"/>`,
		"fallback": "streamline-sharp:leaf-solid",
	});
}

export default Component;
