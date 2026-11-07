import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erffp9gdb.css';
import '../../css/p/po0a-cbct.css';
import '../../css/i/iwn52hiur.css';
import '../../css/d/dqz994vkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="erffp9gdb"/><path class="po0a-cbct"/><path class="iwn52hiur"/><path class="dqz994vkz"/>`,
		"fallback": "solar:mouse-circle-bold",
	});
}

export default Component;
