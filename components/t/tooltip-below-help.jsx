import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r55ny5bvl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r55ny5bvl"/>`,
		"fallback": "memory:tooltip-below-help",
	});
}

export default Component;
