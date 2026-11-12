import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emu_9rbiz.css';
import '../../css/a/a18sp8bki.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emu_9rbiz"/><path class="a18sp8bki"/>`,
		"fallback": "selfhst:ultimate-certificate-manager-light",
	});
}

export default Component;
