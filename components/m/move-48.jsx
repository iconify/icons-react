import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwuo8mbhr.css';
import '../../css/t/t37b9jb9z.css';
import '../../css/q/qh6npjbwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwuo8mbhr"/><path class="t37b9jb9z"/><path class="qh6npjbwk"/>`,
		"fallback": "energy-icons:move-48",
	});
}

export default Component;
