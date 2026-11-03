import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwzznuyfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwzznuyfp"/>`,
		"fallback": "sidekickicons:pill-solid",
	});
}

export default Component;
