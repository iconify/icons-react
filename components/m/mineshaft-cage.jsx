import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt-zk8blz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt-zk8blz"/>`,
		"fallback": "pinhead:mineshaft-cage",
	});
}

export default Component;
