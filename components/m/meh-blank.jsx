import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ral5x2b_l.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ral5x2b_l"/>`,
		"fallback": "fa-regular:meh-blank",
	});
}

export default Component;
