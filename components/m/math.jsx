import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grs0l_bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grs0l_bbj"/>`,
		"fallback": "boxicons:math",
	});
}

export default Component;
