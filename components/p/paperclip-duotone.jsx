import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3sa77ogg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary r3sa77ogg"/>`,
		"fallback": "iconaut:paperclip-duotone",
	});
}

export default Component;
