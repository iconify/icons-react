import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubm-y1ib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vubm-y1ib"/>`,
		"fallback": "lsicon:picking-path-filled",
	});
}

export default Component;
