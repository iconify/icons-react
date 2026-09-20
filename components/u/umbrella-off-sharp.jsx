import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sekj5jb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sekj5jb7d"/>`,
		"fallback": "keyline-icons:umbrella-off-sharp",
	});
}

export default Component;
