import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kixdt2b5z.css';
import '../../css/q/qwnitvbfh.css';
import '../../css/r/r2evrhb9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kixdt2b5z"/><path class="qwnitvbfh"/><path class="r2evrhb9i"/>`,
		"fallback": "energy-icons:villa-48",
	});
}

export default Component;
