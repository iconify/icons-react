import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1b3226np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1b3226np"/>`,
		"fallback": "fontisto:pills",
	});
}

export default Component;
