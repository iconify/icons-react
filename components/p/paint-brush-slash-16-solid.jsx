import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxh3qji2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxh3qji2q"/>`,
		"fallback": "sidekickicons:paint-brush-slash-16-solid",
	});
}

export default Component;
