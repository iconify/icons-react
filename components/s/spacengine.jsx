import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz9twfbop.css';

const viewBox = {"width":474,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz9twfbop"/>`,
		"fallback": "file-icons:spacengine",
	});
}

export default Component;
