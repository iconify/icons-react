import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5mmc92w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy5mmc92w"/>`,
		"fallback": "reicon:receipt5",
	});
}

export default Component;
