import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvm_01f-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvm_01f-a"/>`,
		"fallback": "solar:quote-square-bold",
	});
}

export default Component;
