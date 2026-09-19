import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo1wiob4d.css';

const viewBox = {"width":352,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo1wiob4d"/>`,
		"fallback": "ps:sound",
	});
}

export default Component;
