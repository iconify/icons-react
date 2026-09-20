import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koehhbc9o.css';
import '../../css/w/wqypsdb2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koehhbc9o"/><path class="wqypsdb2g"/>`,
		"fallback": "selfhst:kiroshi",
	});
}

export default Component;
