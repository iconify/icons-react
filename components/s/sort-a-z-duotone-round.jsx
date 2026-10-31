import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myjix-b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myjix-b9t"/>`,
		"fallback": "coolicons:sort-a-z-duotone-round",
	});
}

export default Component;
