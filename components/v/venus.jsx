import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by0hihb3l.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by0hihb3l"/>`,
		"fallback": "fa-solid:venus",
	});
}

export default Component;
