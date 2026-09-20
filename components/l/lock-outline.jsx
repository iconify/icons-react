import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgh2i2xsh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgh2i2xsh"/>`,
		"fallback": "lsicon:lock-outline",
	});
}

export default Component;
