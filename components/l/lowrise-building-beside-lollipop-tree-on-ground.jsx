import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt6cbni-w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt6cbni-w"/>`,
		"fallback": "pinhead:lowrise-building-beside-lollipop-tree-on-ground",
	});
}

export default Component;
