import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziyuc4lfp.css';

const viewBox = {"width":476,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziyuc4lfp"/>`,
		"fallback": "file-icons:kitchenci",
	});
}

export default Component;
