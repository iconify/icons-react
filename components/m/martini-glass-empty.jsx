import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq1kgtqzq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq1kgtqzq"/>`,
		"fallback": "fa7-solid:martini-glass-empty",
	});
}

export default Component;
