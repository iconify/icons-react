import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf4ud-_ib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf4ud-_ib"/>`,
		"fallback": "la:quote-left",
	});
}

export default Component;
