import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4kggwbad.css';
import '../../css/u/uek9cd0sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="n4kggwbad"/><path clip-rule="evenodd" class="uek9cd0sz"/>`,
		"fallback": "stash:pagination-alt-solid",
	});
}

export default Component;
