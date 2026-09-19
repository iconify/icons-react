import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w11gdab4p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w11gdab4p"/>`,
		"fallback": "f7:upload-circle",
	});
}

export default Component;
