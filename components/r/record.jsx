import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt9eu9bze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt9eu9bze"/>`,
		"fallback": "ion:record",
	});
}

export default Component;
