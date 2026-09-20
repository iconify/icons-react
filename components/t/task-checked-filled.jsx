import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/g/gmkakaclc.css';
import '../../css/p/p0w709btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="gmkakaclc"/><path class="p0w709btd"/>`,
		"fallback": "tdesign:task-checked-filled",
	});
}

export default Component;
