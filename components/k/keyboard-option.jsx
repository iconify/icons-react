import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n2b9j-zbo.css';
import '../../css/r/rcck58btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n2b9j-zbo"/><path class="rcck58btd"/></g>`,
		"fallback": "streamline-ultimate:keyboard-option",
	});
}

export default Component;
