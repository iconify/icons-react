import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhua4zb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhua4zb5a"/>`,
		"fallback": "lsicon:left-filled",
	});
}

export default Component;
