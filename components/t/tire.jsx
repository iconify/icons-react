import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncj-shb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncj-shb6t"/>`,
		"fallback": "mdi:tire",
	});
}

export default Component;
