import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4ot-3wmv.css';
import '../../css/r/rbkemp0fh.css';
import '../../css/h/h8ov3rb9y.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4ot-3wmv"/><path class="rbkemp0fh"/><path clip-rule="evenodd" class="h8ov3rb9y"/>`,
		"fallback": "lineicons:refresh-user-1",
	});
}

export default Component;
