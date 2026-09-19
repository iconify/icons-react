import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqt8a942q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqt8a942q"/>`,
		"fallback": "griddy-icons:slack",
	});
}

export default Component;
