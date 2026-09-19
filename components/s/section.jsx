import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt7gntd-f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt7gntd-f"/>`,
		"fallback": "fa7-solid:section",
	});
}

export default Component;
