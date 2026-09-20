import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocutishoh.css';

const viewBox = {"width":520,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocutishoh"/>`,
		"fallback": "thesvg-color:matrix-light",
	});
}

export default Component;
