import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu5zp6fme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu5zp6fme"/>`,
		"fallback": "tabler:tooltip",
	});
}

export default Component;
