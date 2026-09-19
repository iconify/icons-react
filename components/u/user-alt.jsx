import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9w7bjbfj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9w7bjbfj"/>`,
		"fallback": "fa7-regular:user-alt",
	});
}

export default Component;
