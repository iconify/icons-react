import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-tdp8bef.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-tdp8bef"/>`,
		"fallback": "temaki:sleep-shelter",
	});
}

export default Component;
