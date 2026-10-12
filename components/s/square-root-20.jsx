import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc5u-tbli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc5u-tbli"/>`,
		"fallback": "energy-icons:square-root-20",
	});
}

export default Component;
