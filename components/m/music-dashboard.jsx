import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3u0_18rl.css';
import '../../css/w/wblmcub7l.css';
import '../../css/w/wr_ombbyr.css';
import '../../css/j/jqsf6xrbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f3u0_18rl"/><path class="wblmcub7l"/><path class="wr_ombbyr"/><path class="jqsf6xrbb"/></g>`,
		"fallback": "reicon:music-dashboard",
	});
}

export default Component;
