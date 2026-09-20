import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjvjlwbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjvjlwbqc"/>`,
		"fallback": "tabler:rotate-clockwise-2",
	});
}

export default Component;
