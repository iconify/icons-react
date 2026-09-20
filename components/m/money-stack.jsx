import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgs1mommk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgs1mommk"/>`,
		"fallback": "uil:money-stack",
	});
}

export default Component;
