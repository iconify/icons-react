import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jndqku9wg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jndqku9wg"/>`,
		"fallback": "file-icons:renovate",
	});
}

export default Component;
