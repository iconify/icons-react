import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0q5zdfdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0q5zdfdh"/>`,
		"fallback": "sidekickicons:video-camera-x-mark-16-solid",
	});
}

export default Component;
