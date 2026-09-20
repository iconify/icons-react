import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h363pobgn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h363pobgn"/>`,
		"fallback": "selfhst:richy-dark",
	});
}

export default Component;
