import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg52xz9ai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg52xz9ai"/>`,
		"fallback": "gravity-ui:triangle-up-fill",
	});
}

export default Component;
