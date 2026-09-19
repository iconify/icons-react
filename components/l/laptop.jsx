import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf-i6ybtw.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf-i6ybtw"/>`,
		"fallback": "zmdi:laptop",
	});
}

export default Component;
