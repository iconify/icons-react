import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egmj6edzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egmj6edzn"/>`,
		"fallback": "ion:ios-film",
	});
}

export default Component;
