import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8iz7rbni.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8iz7rbni"/>`,
		"fallback": "roentgen:pipeline",
	});
}

export default Component;
