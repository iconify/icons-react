import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrgb9jblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrgb9jblc"/>`,
		"fallback": "streamline-ultimate:video-edit-magic-wand",
	});
}

export default Component;
