import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv3-5jg-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vv3-5jg-p"/>`,
		"fallback": "lsicon:remind-filled",
	});
}

export default Component;
