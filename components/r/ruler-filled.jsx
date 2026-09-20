import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svg5nkb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svg5nkb2l"/>`,
		"fallback": "tdesign:ruler-filled",
	});
}

export default Component;
