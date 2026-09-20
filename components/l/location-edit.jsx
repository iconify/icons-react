import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vf2kbkbzf.css';
import '../../css/w/w-yey_5rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vf2kbkbzf"/><path class="w-yey_5rw"/></g>`,
		"fallback": "mynaui:location-edit",
	});
}

export default Component;
