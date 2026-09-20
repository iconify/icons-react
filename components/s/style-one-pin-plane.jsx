import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ietqz2zmb.css';
import '../../css/h/hr1wf2yng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ietqz2zmb"/><path class="hr1wf2yng"/></g>`,
		"fallback": "streamline-ultimate:style-one-pin-plane",
	});
}

export default Component;
