import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucl-n6z2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucl-n6z2o"/>`,
		"fallback": "ion:md-undo",
	});
}

export default Component;
