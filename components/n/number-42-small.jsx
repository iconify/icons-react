import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq0aa8c7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq0aa8c7l"/>`,
		"fallback": "tabler:number-42-small",
	});
}

export default Component;
