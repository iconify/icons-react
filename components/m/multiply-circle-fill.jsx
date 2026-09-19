import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orbkw0iwd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orbkw0iwd"/>`,
		"fallback": "f7:multiply-circle-fill",
	});
}

export default Component;
