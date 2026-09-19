import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk7y5zb7r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk7y5zb7r"/>`,
		"fallback": "fa7-solid:jar-wheat",
	});
}

export default Component;
