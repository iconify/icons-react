import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzl7znbzk.css';
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
		"content": `<path class="qzl7znbzk"/><path class="uqsh6ibhf"/><circle class="pr87757ke"/>`,
		"fallback": "flat-color-icons:unlock",
	});
}

export default Component;
