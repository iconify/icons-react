import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw0xzebts.css';
import '../../css/j/jbfgqo6ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hw0xzebts"/><path class="jbfgqo6ur"/></g>`,
		"fallback": "streamline-ultimate:kindle-hold",
	});
}

export default Component;
