import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb6b2hb8b.css';
import '../../css/g/gcoha---j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb6b2hb8b"/><path class="gcoha---j"/>`,
		"fallback": "selfhst:web-check",
	});
}

export default Component;
