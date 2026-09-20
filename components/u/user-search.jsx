import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msjc9q65v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msjc9q65v"/>`,
		"fallback": "tabler:user-search",
	});
}

export default Component;
