import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppjx4_bbp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppjx4_bbp"/>`,
		"fallback": "energy-icons:reservoir-20",
	});
}

export default Component;
