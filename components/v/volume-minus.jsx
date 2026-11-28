import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsge839ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsge839ps"/>`,
		"fallback": "noviair:volume-minus",
	});
}

export default Component;
