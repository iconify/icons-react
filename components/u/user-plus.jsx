import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpadlyveo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpadlyveo"/>`,
		"fallback": "pixel:user-plus",
	});
}

export default Component;
