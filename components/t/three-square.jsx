import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyfr6rjow.css';
import '../../css/i/ibend16nn.css';
import '../../css/i/i21ar1oaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pyfr6rjow"/><path class="ibend16nn"/><path class="i21ar1oaf"/></g>`,
		"fallback": "reicon:three-square",
	});
}

export default Component;
