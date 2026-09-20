import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi7nx8bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi7nx8bft"/>`,
		"fallback": "reicon:row-vertical",
	});
}

export default Component;
