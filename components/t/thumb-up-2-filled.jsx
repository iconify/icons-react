import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiajuac3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiajuac3w"/>`,
		"fallback": "tdesign:thumb-up-2-filled",
	});
}

export default Component;
