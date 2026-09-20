import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq4snrqik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq4snrqik"/>`,
		"fallback": "thesvg:udemy",
	});
}

export default Component;
