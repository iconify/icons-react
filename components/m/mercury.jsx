import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wszp3tskv.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wszp3tskv"/>`,
		"fallback": "fontisto:mercury",
	});
}

export default Component;
