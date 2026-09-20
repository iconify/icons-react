import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yevpafbzb.css';
import '../../css/t/tzflgcclh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yevpafbzb"/><path class="tzflgcclh"/>`,
		"fallback": "selfhst:teknikkdeler",
	});
}

export default Component;
