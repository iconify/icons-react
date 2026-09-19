import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol8lpnb4o.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol8lpnb4o"/>`,
		"fallback": "whh:vineapp",
	});
}

export default Component;
