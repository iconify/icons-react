import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hree52-wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hree52-wf"/>`,
		"fallback": "tdesign:loading",
	});
}

export default Component;
