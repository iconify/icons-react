import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myddi0u4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myddi0u4g"/>`,
		"fallback": "icon-park-outline:level-five-title",
	});
}

export default Component;
