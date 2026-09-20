import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzcn9wbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzcn9wbhq"/>`,
		"fallback": "simple-icons:rumahweb",
	});
}

export default Component;
