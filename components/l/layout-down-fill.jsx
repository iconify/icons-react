import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv26_lbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv26_lbel"/>`,
		"fallback": "mage:layout-down-fill",
	});
}

export default Component;
