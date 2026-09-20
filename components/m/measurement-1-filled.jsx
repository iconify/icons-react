import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egi5c0z2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egi5c0z2z"/>`,
		"fallback": "tdesign:measurement-1-filled",
	});
}

export default Component;
