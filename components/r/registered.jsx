import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3pyio9mi.css';
import '../../css/s/s9qx38vbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3pyio9mi"/><path class="s9qx38vbk"/>`,
		"fallback": "bxs:registered",
	});
}

export default Component;
