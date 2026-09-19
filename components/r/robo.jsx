import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-i0iub3n.css';

const viewBox = {"width":352,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-i0iub3n"/>`,
		"fallback": "ps:robo",
	});
}

export default Component;
