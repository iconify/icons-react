import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m912t5v7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m912t5v7a"/>`,
		"fallback": "tabler:swimming",
	});
}

export default Component;
