import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg4kqqb_d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg4kqqb_d"/>`,
		"fallback": "memory:slider-end",
	});
}

export default Component;
