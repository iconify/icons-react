import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd00kcbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd00kcbld"/>`,
		"fallback": "tabler:laurel-wreath-2-filled",
	});
}

export default Component;
