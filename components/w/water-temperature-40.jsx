import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em3iyfb9w.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em3iyfb9w"/>`,
		"fallback": "ps:water-temperature-40",
	});
}

export default Component;
