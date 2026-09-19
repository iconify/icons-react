import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2qgdslvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2qgdslvz"/>`,
		"fallback": "flat-color-icons:like",
	});
}

export default Component;
