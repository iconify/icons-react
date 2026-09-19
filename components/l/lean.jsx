import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_aolf-cf.css';

const viewBox = {"width":315,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_aolf-cf"/>`,
		"fallback": "file-icons:lean",
	});
}

export default Component;
