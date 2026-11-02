import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ota4psolv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ota4psolv"/>`,
		"fallback": "mingcute:sad-line",
	});
}

export default Component;
