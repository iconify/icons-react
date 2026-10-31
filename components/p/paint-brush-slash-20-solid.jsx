import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf6_acwvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf6_acwvu"/>`,
		"fallback": "sidekickicons:paint-brush-slash-20-solid",
	});
}

export default Component;
