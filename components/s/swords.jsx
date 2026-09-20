import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy3676b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy3676b6z"/>`,
		"fallback": "lucide:swords",
	});
}

export default Component;
