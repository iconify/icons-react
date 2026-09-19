import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0q48gaig.css';

const viewBox = {"width":346,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0q48gaig"/>`,
		"fallback": "file-icons:solidarity",
	});
}

export default Component;
