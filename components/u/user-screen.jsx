import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1vrjfb3n.css';
import '../../css/p/p1nl85bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1vrjfb3n"/><path class="p1nl85bfk"/></g>`,
		"fallback": "tabler:user-screen",
	});
}

export default Component;
