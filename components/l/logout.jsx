import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbpddbcjr.css';

const viewBox = {"width":1188,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbpddbcjr"/>`,
		"fallback": "websymbol:logout",
	});
}

export default Component;
