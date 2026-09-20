import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzpqusz2y.css';

const viewBox = {"width":1534,"height":1225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzpqusz2y"/>`,
		"fallback": "thesvg-color:sandisk",
	});
}

export default Component;
