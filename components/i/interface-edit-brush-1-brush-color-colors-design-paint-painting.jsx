import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pggpytbfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pggpytbfj"/>`,
		"fallback": "streamline:interface-edit-brush-1-brush-color-colors-design-paint-painting",
	});
}

export default Component;
