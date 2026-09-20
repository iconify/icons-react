import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz17-3m3v.css';
import '../../css/q/q3_f8s1ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz17-3m3v"/><path class="q3_f8s1ue"/>`,
		"fallback": "tdesign:task-double-filled",
	});
}

export default Component;
