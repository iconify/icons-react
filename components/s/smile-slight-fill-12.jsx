import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6dyyyb_f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6dyyyb_f"/>`,
		"fallback": "garden:smile-slight-fill-12",
	});
}

export default Component;
