import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7cp6hix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb7cp6hix"/>`,
		"fallback": "healthicons:village",
	});
}

export default Component;
