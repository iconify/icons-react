import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bign-sb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bign-sb9p"/>`,
		"fallback": "fe:picture-square",
	});
}

export default Component;
