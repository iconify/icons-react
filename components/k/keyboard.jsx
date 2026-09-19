import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jffrofu6s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jffrofu6s"/>`,
		"fallback": "fa6-regular:keyboard",
	});
}

export default Component;
