import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir5tzud0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir5tzud0p"/>`,
		"fallback": "codicon:right-panel-hide",
	});
}

export default Component;
