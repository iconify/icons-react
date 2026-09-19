import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htk6txb6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htk6txb6z"/>`,
		"fallback": "ion:md-football",
	});
}

export default Component;
