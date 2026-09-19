import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boqllab4b.css';
import '../../css/a/am0b34b6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boqllab4b"/><path class="am0b34b6k"/>`,
		"fallback": "carbon:warning-square",
	});
}

export default Component;
