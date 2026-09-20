import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm3geac7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm3geac7z"/>`,
		"fallback": "streamline-sharp:select-all-solid",
	});
}

export default Component;
