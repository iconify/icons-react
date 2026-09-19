import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-2mgj25h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-2mgj25h"/>`,
		"fallback": "icomoon-free:mug",
	});
}

export default Component;
