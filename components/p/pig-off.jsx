import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxpsjv5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxpsjv5ou"/>`,
		"fallback": "tabler:pig-off",
	});
}

export default Component;
