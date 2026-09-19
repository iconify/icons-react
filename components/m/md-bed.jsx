import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc46ed-rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc46ed-rw"/>`,
		"fallback": "ion:md-bed",
	});
}

export default Component;
