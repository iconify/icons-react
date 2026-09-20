import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulv4xq14x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulv4xq14x"/>`,
		"fallback": "pinhead:water-bottle",
	});
}

export default Component;
