import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozaoy9b0z.css';
import '../../css/x/xqo9p-xfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozaoy9b0z"/><path class="xqo9p-xfw"/>`,
		"fallback": "solar:user-hand-up-bold",
	});
}

export default Component;
