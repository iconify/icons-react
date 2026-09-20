import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laizaxi8c.css';
import '../../css/n/n32urigtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laizaxi8c"/><path class="n32urigtc"/>`,
		"fallback": "uim:left-indent",
	});
}

export default Component;
