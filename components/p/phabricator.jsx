import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7-1w7biv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7-1w7biv"/>`,
		"fallback": "fa7-brands:phabricator",
	});
}

export default Component;
