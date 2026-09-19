import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a10l0tb4l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a10l0tb4l"/>`,
		"fallback": "gravity-ui:play-fill",
	});
}

export default Component;
