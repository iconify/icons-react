import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9t5qgbnj.css';
import '../../css/u/uqsh6ibhf.css';
import '../../css/p/pr87757ke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9t5qgbnj"/><path class="uqsh6ibhf"/><circle class="pr87757ke"/>`,
		"fallback": "flat-color-icons:lock",
	});
}

export default Component;
