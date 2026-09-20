import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzpy4zb0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gzpy4zb0x"/>`,
		"fallback": "ix:shift",
	});
}

export default Component;
