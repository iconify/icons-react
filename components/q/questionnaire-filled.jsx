import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j061hzu2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j061hzu2d"/>`,
		"fallback": "tdesign:questionnaire-filled",
	});
}

export default Component;
