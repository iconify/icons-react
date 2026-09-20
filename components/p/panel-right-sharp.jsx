import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlwpi5b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlwpi5b1b"/>`,
		"fallback": "keyline-icons:panel-right-sharp",
	});
}

export default Component;
