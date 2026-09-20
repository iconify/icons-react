import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gti885y0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gti885y0o"/>`,
		"fallback": "thesvg:taichi-lang",
	});
}

export default Component;
