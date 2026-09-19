import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkj37haki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkj37haki"/>`,
		"fallback": "bi:train-freight-front",
	});
}

export default Component;
