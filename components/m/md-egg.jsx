import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilf5-qrkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilf5-qrkw"/>`,
		"fallback": "ion:md-egg",
	});
}

export default Component;
