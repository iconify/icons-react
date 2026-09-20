import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-junbcx.css';
import '../../css/j/jicrk8bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu-junbcx"/><path clip-rule="evenodd" class="jicrk8bfm"/>`,
		"fallback": "qlementine-icons:trash-24",
	});
}

export default Component;
