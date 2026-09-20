import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fom46j_ot.css';
import '../../css/e/en5_3bbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fom46j_ot"/><path class="en5_3bbnr"/>`,
		"fallback": "tdesign:mentioned-filled",
	});
}

export default Component;
