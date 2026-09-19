import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvju54b2i.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvju54b2i"/>`,
		"fallback": "fontisto:test-tube",
	});
}

export default Component;
