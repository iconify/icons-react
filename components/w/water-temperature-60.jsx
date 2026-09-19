import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvbaz-blr.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvbaz-blr"/>`,
		"fallback": "ps:water-temperature-60",
	});
}

export default Component;
