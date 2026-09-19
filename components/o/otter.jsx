import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u85bfj4hg.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u85bfj4hg"/>`,
		"fallback": "fa6-solid:otter",
	});
}

export default Component;
