import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjx7gcb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjx7gcb2w"/>`,
		"fallback": "tdesign:tools-circle-filled",
	});
}

export default Component;
