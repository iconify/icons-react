import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwi1r-0my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwi1r-0my"/>`,
		"fallback": "tabler:layout-navbar-inactive",
	});
}

export default Component;
