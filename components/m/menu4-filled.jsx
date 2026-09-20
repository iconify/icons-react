import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncoo9jbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncoo9jbzq"/>`,
		"fallback": "reicon:menu4-filled",
	});
}

export default Component;
