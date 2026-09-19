import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa-h08bfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa-h08bfx"/>`,
		"fallback": "carbon:moonrise",
	});
}

export default Component;
