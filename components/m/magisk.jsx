import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jznvnct7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jznvnct7a"/>`,
		"fallback": "simple-icons:magisk",
	});
}

export default Component;
