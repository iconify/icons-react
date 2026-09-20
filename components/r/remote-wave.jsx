import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj36z8w0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj36z8w0j"/>`,
		"fallback": "tdesign:remote-wave",
	});
}

export default Component;
