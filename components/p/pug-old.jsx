import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv3bzacig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv3bzacig"/>`,
		"fallback": "file-icons:pug-old",
	});
}

export default Component;
