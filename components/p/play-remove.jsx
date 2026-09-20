import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s6kr55ypt.css';
import '../../css/l/l37y_zbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s6kr55ypt"/><path class="l37y_zbrm"/></g>`,
		"fallback": "reicon:play-remove",
	});
}

export default Component;
