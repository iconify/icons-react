import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4x5wgpas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4x5wgpas"/>`,
		"fallback": "tdesign:usb-filled",
	});
}

export default Component;
