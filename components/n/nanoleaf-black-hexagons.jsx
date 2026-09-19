import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apzc8db8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apzc8db8v"/>`,
		"fallback": "cbi:nanoleaf-black-hexagons",
	});
}

export default Component;
