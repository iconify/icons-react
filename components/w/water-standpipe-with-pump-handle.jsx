import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2gwocbva.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2gwocbva"/>`,
		"fallback": "pinhead:water-standpipe-with-pump-handle",
	});
}

export default Component;
