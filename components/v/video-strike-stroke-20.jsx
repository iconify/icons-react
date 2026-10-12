import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-9uj60l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln-9uj60l"/>`,
		"fallback": "garden:video-strike-stroke-20",
	});
}

export default Component;
