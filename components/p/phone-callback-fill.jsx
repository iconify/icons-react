import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypft5mbdm.css';
import '../../css/j/jdgd8ngaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypft5mbdm"/><path class="jdgd8ngaq"/>`,
		"fallback": "si:phone-callback-fill",
	});
}

export default Component;
