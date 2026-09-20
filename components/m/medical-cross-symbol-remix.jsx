import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_vwgv6pa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_vwgv6pa"/>`,
		"fallback": "streamline:medical-cross-symbol-remix",
	});
}

export default Component;
