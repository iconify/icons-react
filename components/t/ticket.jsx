import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r84m4t-aw.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r84m4t-aw"/>`,
		"fallback": "ps:ticket",
	});
}

export default Component;
