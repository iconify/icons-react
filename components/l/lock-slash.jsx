import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cfv20vb2c.css';
import '../../css/h/h5y2p1bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cfv20vb2c"/><path class="h5y2p1bxy"/></g>`,
		"fallback": "reicon:lock-slash",
	});
}

export default Component;
