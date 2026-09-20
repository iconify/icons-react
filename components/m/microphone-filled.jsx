import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byqra4-jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byqra4-jw"/>`,
		"fallback": "tdesign:microphone-filled",
	});
}

export default Component;
