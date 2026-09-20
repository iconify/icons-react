import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdd6--buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdd6--buf"/>`,
		"fallback": "streamline-sharp:paperclip-2-solid",
	});
}

export default Component;
