import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh9u8-bql.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh9u8-bql"/>`,
		"fallback": "ant-design:qrcode-outlined",
	});
}

export default Component;
