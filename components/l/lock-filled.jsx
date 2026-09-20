import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsb_3sb8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tsb_3sb8f"/>`,
		"fallback": "lsicon:lock-filled",
	});
}

export default Component;
