import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl7m9xbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl7m9xbgl primary"/>`,
		"fallback": "iconaut:refresh-alert-duotone",
	});
}

export default Component;
