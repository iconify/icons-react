import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21g7ybtt.css';
import '../../css/o/ogc9qccuw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a21g7ybtt"/><path class="ogc9qccuw"/>`,
		"fallback": "carbon:u3",
	});
}

export default Component;
