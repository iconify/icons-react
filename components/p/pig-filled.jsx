import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0g97kztd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0g97kztd"/>`,
		"fallback": "griddy-icons:pig-filled",
	});
}

export default Component;
