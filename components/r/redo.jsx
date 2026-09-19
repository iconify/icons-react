import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cww7r3ejt.css';
import '../../css/t/tt10iz6wh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cww7r3ejt"/><path class="tt10iz6wh"/>`,
		"fallback": "ei:redo",
	});
}

export default Component;
