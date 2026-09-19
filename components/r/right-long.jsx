import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw46uobjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw46uobjp"/>`,
		"fallback": "fa6-solid:right-long",
	});
}

export default Component;
