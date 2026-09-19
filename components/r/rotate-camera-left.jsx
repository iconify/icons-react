import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wi774gbxj.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/j/jkon69jfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wi774gbxj"/><path class="b64l0dbmf"/><path class="jkon69jfq"/></g>`,
		"fallback": "iconoir:rotate-camera-left",
	});
}

export default Component;
