import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jarw_gnfr.css';

const viewBox = {"width":1103,"height":386};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jarw_gnfr"/>`,
		"fallback": "thesvg-color:motion-dark",
	});
}

export default Component;
