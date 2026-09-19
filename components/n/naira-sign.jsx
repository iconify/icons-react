import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw2a7s12f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw2a7s12f"/>`,
		"fallback": "fa7-solid:naira-sign",
	});
}

export default Component;
