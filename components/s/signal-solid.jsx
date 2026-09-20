import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa4_gqbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa4_gqbnu"/>`,
		"fallback": "mynaui:signal-solid",
	});
}

export default Component;
