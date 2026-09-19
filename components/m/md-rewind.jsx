import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omh4idx2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omh4idx2l"/>`,
		"fallback": "ion:md-rewind",
	});
}

export default Component;
