import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljvs4moct.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljvs4moct"/>`,
		"fallback": "fontisto:night-alt-rain",
	});
}

export default Component;
