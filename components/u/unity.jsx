import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8eah7ecu.css';
import '../../css/j/jk9k79i2a.css';
import '../../css/n/npy1bcc-b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8eah7ecu"/><path class="jk9k79i2a"/><path class="npy1bcc-b"/>`,
		"fallback": "devicon:unity",
	});
}

export default Component;
