import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0xxf5bby.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0xxf5bby"/>`,
		"fallback": "pinhead:person-jumping-on-trampoline",
	});
}

export default Component;
