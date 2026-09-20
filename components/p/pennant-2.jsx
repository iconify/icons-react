import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l823qg8ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l823qg8ey"/>`,
		"fallback": "tabler:pennant-2",
	});
}

export default Component;
