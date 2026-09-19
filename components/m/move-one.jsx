import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu8-imbge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu8-imbge"/>`,
		"fallback": "icon-park-solid:move-one",
	});
}

export default Component;
