import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8_542oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8_542oq"/>`,
		"fallback": "streamline-freehand:light-umbrella-reflect",
	});
}

export default Component;
