import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulk470blc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulk470blc"/>`,
		"fallback": "icon-park-outline:paragraph-triangle",
	});
}

export default Component;
