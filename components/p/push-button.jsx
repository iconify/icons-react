import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tegeywllk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tegeywllk"/>`,
		"fallback": "at-icons:push-button",
	});
}

export default Component;
