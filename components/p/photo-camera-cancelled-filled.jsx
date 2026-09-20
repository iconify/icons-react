import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfge6sb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfge6sb2t"/>`,
		"fallback": "ix:photo-camera-cancelled-filled",
	});
}

export default Component;
