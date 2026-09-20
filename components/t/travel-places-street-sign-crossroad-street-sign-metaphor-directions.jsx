import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fngc6jfhu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fngc6jfhu"/>`,
		"fallback": "streamline:travel-places-street-sign-crossroad-street-sign-metaphor-directions",
	});
}

export default Component;
