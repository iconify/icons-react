import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v542ywb3f.css';
import '../../css/j/jvkhsobmq.css';
import '../../css/x/xdecqpbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v542ywb3f"/><path class="jvkhsobmq"/><path class="xdecqpbqq"/></g>`,
		"fallback": "reicon:layers2",
	});
}

export default Component;
