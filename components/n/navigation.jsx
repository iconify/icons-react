import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfzm3g0mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfzm3g0mg"/>`,
		"fallback": "matita:navigation",
	});
}

export default Component;
