import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkxqx5p1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkxqx5p1o"/>`,
		"fallback": "thesvg-color:passport",
	});
}

export default Component;
