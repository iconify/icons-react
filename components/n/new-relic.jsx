import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn9btkb1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn9btkb1c"/>`,
		"fallback": "file-icons:new-relic",
	});
}

export default Component;
