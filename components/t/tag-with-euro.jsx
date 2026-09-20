import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9tlc311j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9tlc311j"/>`,
		"fallback": "pinhead:tag-with-euro",
	});
}

export default Component;
