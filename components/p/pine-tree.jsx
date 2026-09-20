import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0mdibrk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm0mdibrk"/>`,
		"fallback": "streamline-flex:pine-tree",
	});
}

export default Component;
