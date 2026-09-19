import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6q6ugetu.css';

const viewBox = {"width":480,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6q6ugetu"/>`,
		"fallback": "ps:quote",
	});
}

export default Component;
