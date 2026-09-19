import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi_-iqbum.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi_-iqbum"/>`,
		"fallback": "carbon:skip-back",
	});
}

export default Component;
