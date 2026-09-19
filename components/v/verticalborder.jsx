import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kimoq7uac.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kimoq7uac"/>`,
		"fallback": "whh:verticalborder",
	});
}

export default Component;
