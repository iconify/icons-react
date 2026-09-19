import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppb8sdobi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppb8sdobi"/>`,
		"fallback": "fad:pointer",
	});
}

export default Component;
