import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wywn09brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wywn09brs"/>`,
		"fallback": "tabler:menu-deep",
	});
}

export default Component;
