import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjki5abjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjki5abjg"/>`,
		"fallback": "ix:plc-device-tag",
	});
}

export default Component;
