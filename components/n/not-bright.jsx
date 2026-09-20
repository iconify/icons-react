import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_lobbbaz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o_lobbbaz"/>`,
		"fallback": "ooui:not-bright",
	});
}

export default Component;
