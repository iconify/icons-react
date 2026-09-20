import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe62bdcxt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe62bdcxt"/>`,
		"fallback": "pinhead:russian-orthodox-cross",
	});
}

export default Component;
