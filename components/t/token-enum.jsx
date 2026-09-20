import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjkubb39r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjkubb39r"/>`,
		"fallback": "oui:token-enum",
	});
}

export default Component;
