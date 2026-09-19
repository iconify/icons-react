import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdwbaegjf.css';
import '../../css/g/g8gex4kkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdwbaegjf"/><path class="g8gex4kkr"/>`,
		"fallback": "eos-icons:volume-outlined",
	});
}

export default Component;
