import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4bmz-b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4bmz-b5j"/>`,
		"fallback": "keyline-icons:settings-dot",
	});
}

export default Component;
