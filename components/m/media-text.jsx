import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xehvr1f4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xehvr1f4x"/>`,
		"fallback": "dashicons:media-text",
	});
}

export default Component;
