import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-0nqacer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-0nqacer"/>`,
		"fallback": "streamline-ultimate:voice-id-bold",
	});
}

export default Component;
