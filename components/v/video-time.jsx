import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuc5c_btk.css';
import '../../css/j/jmdah2bcp.css';
import '../../css/v/v-ajdhbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kuc5c_btk"/><path class="jmdah2bcp"/><path class="v-ajdhbia"/></g>`,
		"fallback": "reicon:video-time",
	});
}

export default Component;
