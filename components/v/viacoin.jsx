import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6azaz84v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6azaz84v"/>`,
		"fallback": "fa7-brands:viacoin",
	});
}

export default Component;
