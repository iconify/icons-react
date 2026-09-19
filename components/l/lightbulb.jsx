import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf0alrb_x.css';
import '../../css/c/ckevorb5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf0alrb_x"/><path class="ckevorb5i"/>`,
		"fallback": "ion:lightbulb",
	});
}

export default Component;
