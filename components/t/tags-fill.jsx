import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c__d53b9x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c__d53b9x"/>`,
		"fallback": "pullo:tags-fill",
	});
}

export default Component;
