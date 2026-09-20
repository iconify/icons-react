import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv19rdkrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv19rdkrf"/>`,
		"fallback": "simple-icons:pkgsrc",
	});
}

export default Component;
