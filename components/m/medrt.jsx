import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiki71mjc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiki71mjc"/>`,
		"fallback": "fa7-brands:medrt",
	});
}

export default Component;
