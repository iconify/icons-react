import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqru0beyd.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqru0beyd"/>`,
		"fallback": "whh:lego",
	});
}

export default Component;
