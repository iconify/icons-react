import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os3qt5bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os3qt5bjq"/>`,
		"fallback": "solar:square-arrow-left-outline",
	});
}

export default Component;
