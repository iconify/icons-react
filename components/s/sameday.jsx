import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-4gdf4nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-4gdf4nt"/>`,
		"fallback": "cbi:sameday",
	});
}

export default Component;
