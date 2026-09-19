import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgq1ff3gg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgq1ff3gg"/>`,
		"fallback": "ion:md-basket",
	});
}

export default Component;
