import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgdj3873d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgdj3873d"/>`,
		"fallback": "fa7-solid:ranking-star",
	});
}

export default Component;
