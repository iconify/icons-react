import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqwvn7bqy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qqwvn7bqy"/>`,
		"fallback": "lsicon:menu-thwartwise-filled",
	});
}

export default Component;
