import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4p6zwb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4p6zwb9s"/>`,
		"fallback": "keyline-icons:share-2-sharp-duotone",
	});
}

export default Component;
