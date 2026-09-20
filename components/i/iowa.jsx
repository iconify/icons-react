import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79fcum9t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z79fcum9t"/>`,
		"fallback": "pinhead:iowa",
	});
}

export default Component;
