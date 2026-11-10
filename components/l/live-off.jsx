import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t977tdb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t977tdb4r"/>`,
		"fallback": "andrsrxn:live-off",
	});
}

export default Component;
