import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5lzj_a1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5lzj_a1t"/>`,
		"fallback": "octicon:smiley-neutral-16",
	});
}

export default Component;
