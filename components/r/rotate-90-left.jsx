import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su_59fbvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su_59fbvo"/>`,
		"fallback": "ix:rotate-90-left",
	});
}

export default Component;
