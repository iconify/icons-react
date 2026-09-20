import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7o2i6b7f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7o2i6b7f"/>`,
		"fallback": "simple-line-icons:picture",
	});
}

export default Component;
