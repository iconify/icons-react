import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz19t2nyt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz19t2nyt"/>`,
		"fallback": "f7:square-split-2x2-fill",
	});
}

export default Component;
