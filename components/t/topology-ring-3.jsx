import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjub1141u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjub1141u"/>`,
		"fallback": "tabler:topology-ring-3",
	});
}

export default Component;
