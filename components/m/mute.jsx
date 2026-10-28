import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i55-vdeam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i55-vdeam"/>`,
		"fallback": "codex:mute",
	});
}

export default Component;
