import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw5h8ln7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cw5h8ln7j"/>`,
		"fallback": "qlementine-icons:save-24",
	});
}

export default Component;
