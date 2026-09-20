import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6nmtgbpv.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6nmtgbpv"/>`,
		"fallback": "wpf:signature",
	});
}

export default Component;
