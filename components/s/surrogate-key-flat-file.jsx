import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps-inobsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps-inobsh"/>`,
		"fallback": "carbon:surrogate-key-flat-file",
	});
}

export default Component;
