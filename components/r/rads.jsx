import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iui6z0b_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iui6z0b_a"/>`,
		"fallback": "cryptocurrency:rads",
	});
}

export default Component;
