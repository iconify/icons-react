import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jro60-bkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jro60-bkw"/>`,
		"fallback": "selfhst:librum-light",
	});
}

export default Component;
