import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0x476ygt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0x476ygt"/>`,
		"fallback": "picon:right",
	});
}

export default Component;
