import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x92qttb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x92qttb8x"/>`,
		"fallback": "noviair:kettle-clock",
	});
}

export default Component;
