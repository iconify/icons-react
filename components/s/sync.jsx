import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqyji8tcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqyji8tcj"/>`,
		"fallback": "icon-park-outline:sync",
	});
}

export default Component;
