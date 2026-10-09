import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-vml9bmf.css';
import '../../css/j/j8fkx09kt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-vml9bmf"/><path class="j8fkx09kt"/>`,
		"fallback": "energy-icons:interconnector-48",
	});
}

export default Component;
