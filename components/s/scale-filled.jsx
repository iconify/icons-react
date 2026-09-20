import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4yikcexh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n4yikcexh"/>`,
		"fallback": "lsicon:scale-filled",
	});
}

export default Component;
