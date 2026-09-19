import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7_g8vbyq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7_g8vbyq"/>`,
		"fallback": "icon-park-outline:sorcerer-hat",
	});
}

export default Component;
