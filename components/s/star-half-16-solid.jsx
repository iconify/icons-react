import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4_8j7lyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n4_8j7lyh"/>`,
		"fallback": "sidekickicons:star-half-16-solid",
	});
}

export default Component;
