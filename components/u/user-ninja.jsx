import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q84qynbbo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q84qynbbo"/>`,
		"fallback": "fa7-solid:user-ninja",
	});
}

export default Component;
