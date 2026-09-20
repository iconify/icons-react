import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cof72cpry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cof72cpry"/>`,
		"fallback": "thesvg:qi",
	});
}

export default Component;
