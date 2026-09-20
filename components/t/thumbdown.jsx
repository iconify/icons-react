import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf2_ehdun.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf2_ehdun"/>`,
		"fallback": "picon:thumbdown",
	});
}

export default Component;
