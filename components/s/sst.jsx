import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyknwlbkn.css';

const viewBox = {"width":82,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wyknwlbkn"/>`,
		"fallback": "thesvg-color:sst",
	});
}

export default Component;
