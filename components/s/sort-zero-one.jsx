import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgmhrc7oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgmhrc7oc"/>`,
		"fallback": "andrsrxn:sort-zero-one",
	});
}

export default Component;
