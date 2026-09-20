import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp2kr3bzv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fp2kr3bzv"/>`,
		"fallback": "streamline:two-finger-drag-hotizontal-remix",
	});
}

export default Component;
