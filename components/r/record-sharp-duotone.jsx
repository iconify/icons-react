import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diy7rja_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diy7rja_s"/>`,
		"fallback": "keyline-icons:record-sharp-duotone",
	});
}

export default Component;
