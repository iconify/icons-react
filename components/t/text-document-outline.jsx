import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnu7rbbjb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnu7rbbjb"/>`,
		"fallback": "teenyicons:text-document-outline",
	});
}

export default Component;
