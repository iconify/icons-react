import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvbze2s-t.css';
import '../../css/j/j0zlpmbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvbze2s-t"/><path class="j0zlpmbta"/>`,
		"fallback": "token:uptick",
	});
}

export default Component;
