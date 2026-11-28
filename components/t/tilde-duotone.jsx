import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlf42bbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlf42bbdk primary"/>`,
		"fallback": "iconaut:tilde-duotone",
	});
}

export default Component;
