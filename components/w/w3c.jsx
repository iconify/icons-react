import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mphhmkb9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mphhmkb9g"/>`,
		"fallback": "file-icons:w3c",
	});
}

export default Component;
