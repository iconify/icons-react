import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwz8omazq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwz8omazq"/>`,
		"fallback": "fa7-brands:lets-encrypt",
	});
}

export default Component;
