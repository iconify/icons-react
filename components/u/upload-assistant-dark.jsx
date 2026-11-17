import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn6bxrb7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn6bxrb7d"/>`,
		"fallback": "selfhst:upload-assistant-dark",
	});
}

export default Component;
