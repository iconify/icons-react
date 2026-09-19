import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw9l9zbzr.css';
import '../../css/g/gjykr6brl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw9l9zbzr"/><path class="gjykr6brl"/>`,
		"fallback": "carbon:result-draft",
	});
}

export default Component;
