import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr0ri2bsc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr0ri2bsc"/>`,
		"fallback": "pinhead:water-tap-with-drinking-glass",
	});
}

export default Component;
