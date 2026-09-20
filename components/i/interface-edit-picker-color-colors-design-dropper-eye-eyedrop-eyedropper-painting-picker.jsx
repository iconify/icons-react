import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phmuk5bsk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phmuk5bsk"/>`,
		"fallback": "streamline:interface-edit-picker-color-colors-design-dropper-eye-eyedrop-eyedropper-painting-picker",
	});
}

export default Component;
