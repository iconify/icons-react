import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au1xc4bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au1xc4bik"/>`,
		"fallback": "noviair:tablet",
	});
}

export default Component;
