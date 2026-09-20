import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hosod8b9n.css';
import '../../css/j/jjc2wxbhw.css';
import '../../css/v/v70_pwbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hosod8b9n"/><path clip-rule="evenodd" class="jjc2wxbhw"/><path class="v70_pwbed"/>`,
		"fallback": "token:kicks",
	});
}

export default Component;
