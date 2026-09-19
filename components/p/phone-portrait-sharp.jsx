import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgn4__dfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgn4__dfv"/>`,
		"fallback": "ion:phone-portrait-sharp",
	});
}

export default Component;
