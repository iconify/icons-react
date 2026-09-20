import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jon1cz6hx.css';
import '../../css/l/lv3b0kbuz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jon1cz6hx"/><path class="lv3b0kbuz"/>`,
		"fallback": "selfhst:uber",
	});
}

export default Component;
