import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ljs0bzh.css';

const viewBox = {"width":800,"height":800,"left":100,"top":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9ljs0bzh"/>`,
		"fallback": "material-icon-theme:rollup",
	});
}

export default Component;
