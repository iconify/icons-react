import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co2bjhb_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co2bjhb_d"/>`,
		"fallback": "codicon:text-size",
	});
}

export default Component;
