import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjdzetbqt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjdzetbqt"/>`,
		"fallback": "streamline:one-finger-hold-solid",
	});
}

export default Component;
