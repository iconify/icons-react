import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su1vn_25q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su1vn_25q"/>`,
		"fallback": "tabler:location-down",
	});
}

export default Component;
