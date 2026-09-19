import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aim5hzbvg.css';
import '../../css/e/e4iey6k0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aim5hzbvg"/><path class="e4iey6k0o"/>`,
		"fallback": "flat-color-icons:usb",
	});
}

export default Component;
