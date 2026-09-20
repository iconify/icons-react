import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhn960soy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhn960soy"/>`,
		"fallback": "oui:token-range",
	});
}

export default Component;
