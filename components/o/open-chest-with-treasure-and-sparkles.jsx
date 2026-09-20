import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y17aut7vh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y17aut7vh"/>`,
		"fallback": "pinhead:open-chest-with-treasure-and-sparkles",
	});
}

export default Component;
