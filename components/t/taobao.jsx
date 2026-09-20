import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlv4y2bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlv4y2bye"/>`,
		"fallback": "thesvg-color:taobao",
	});
}

export default Component;
