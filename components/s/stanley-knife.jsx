import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxuywbc4r.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxuywbc4r"/>`,
		"fallback": "wpf:stanley-knife",
	});
}

export default Component;
