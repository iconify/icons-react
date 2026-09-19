import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luegz3bix.css';

const viewBox = {"width":427,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luegz3bix"/>`,
		"fallback": "file-icons:nuclide",
	});
}

export default Component;
