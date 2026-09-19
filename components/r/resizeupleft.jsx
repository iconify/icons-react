import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et1wd_cfd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et1wd_cfd"/>`,
		"fallback": "whh:resizeupleft",
	});
}

export default Component;
