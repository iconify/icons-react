import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6tw3_chu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6tw3_chu"/>`,
		"fallback": "fa7-solid:swatchbook",
	});
}

export default Component;
