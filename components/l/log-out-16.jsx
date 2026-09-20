import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo3c7mblw.css';
import '../../css/i/idhyedbph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo3c7mblw"/><path class="idhyedbph"/>`,
		"fallback": "qlementine-icons:log-out-16",
	});
}

export default Component;
