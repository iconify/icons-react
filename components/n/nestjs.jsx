import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4j1qob0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4j1qob0k"/>`,
		"fallback": "simple-icons:nestjs",
	});
}

export default Component;
