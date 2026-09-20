import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1j5ebjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw1j5ebjx"/>`,
		"fallback": "ix:note-filled",
	});
}

export default Component;
