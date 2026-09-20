import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7tonmbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7tonmbzz"/>`,
		"fallback": "streamline-sharp:new-sticky-note-remix",
	});
}

export default Component;
