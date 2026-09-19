import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt94vufyl.css';
import '../../css/e/e_hujhb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt94vufyl"/><rect class="e_hujhb6x"/>`,
		"fallback": "boxicons:margin-right-filled",
	});
}

export default Component;
