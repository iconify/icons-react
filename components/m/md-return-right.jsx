import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w46o3ib0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w46o3ib0w"/>`,
		"fallback": "ion:md-return-right",
	});
}

export default Component;
