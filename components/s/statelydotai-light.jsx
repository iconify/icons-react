import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db7rvqw0n.css';

const viewBox = {"width":1000,"height":405};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db7rvqw0n"/>`,
		"fallback": "thesvg-color:statelydotai-light",
	});
}

export default Component;
