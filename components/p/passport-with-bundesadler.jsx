import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1a5awbwo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1a5awbwo"/>`,
		"fallback": "pinhead:passport-with-bundesadler",
	});
}

export default Component;
