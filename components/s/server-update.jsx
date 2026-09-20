import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epc7_tgau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epc7_tgau"/>`,
		"fallback": "reicon:server-update",
	});
}

export default Component;
