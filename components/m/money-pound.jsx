import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5pm_acgu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5pm_acgu"/>`,
		"fallback": "f7:money-pound",
	});
}

export default Component;
